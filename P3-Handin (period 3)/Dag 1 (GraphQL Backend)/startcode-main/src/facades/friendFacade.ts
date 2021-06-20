import { IFriend } from '../interfaces/IFriend';
import { Db, Collection } from "mongodb";
import bcrypt from "bcryptjs";
import { ApiError } from '../error/errors';
import Joi, { ValidationError } from "joi"

const BCRYPT_ROUNDS = 10;

const USER_INPUT_SCHEMA = Joi.object({
  firstName: Joi.string().min(2).max(40).required(),
  lastName: Joi.string().min(2).max(50).required(),
  password: Joi.string().min(4).max(30).required(),
  email: Joi.string().email().required()
})

const USER_INPUT_EDIT_SCHEMA = Joi.object({
  firstName: Joi.string().min(2).max(40),
  lastName: Joi.string().min(2).max(50),
  password: Joi.string().min(4).max(30),
  email: Joi.string().email().required(),
})

class FriendsFacade {
  db: Db
  friendCollection: Collection

  constructor(db: Db) {
    this.db = db;
    this.friendCollection = db.collection("friends");
  }

  /**
   * 
   * @param friend 
   * @throws ApiError if validation fails
   */
  async addFriend(friend: IFriend): Promise<{ id: string }> {
    const status = USER_INPUT_SCHEMA.validate(friend);
    if (status.error) {
      throw new ApiError(status.error.message, 400)
    }
    const hashedpw = await bcrypt.hash(friend.password, BCRYPT_ROUNDS);
    const f = { ...friend, password: hashedpw }
    const result = await this.friendCollection.insertOne(f);
    return { ...f, id: result.insertedId }
  }

  /**
   * TODO
   * @param email 
   * @param friend 
   * @throws ApiError if validation fails or friend was not found
   */
   async editFriend(email: string, friend: IFriend): Promise<IFriend> {
    const status = USER_INPUT_EDIT_SCHEMA.validate(friend);
    if (status.error) {
      throw new ApiError(status.error.message, 400)
    }
    let f = { ...friend }
    if (friend.password) {
      const hashedpw = await bcrypt.hash(friend.password, BCRYPT_ROUNDS);
      f = { ...friend, password: hashedpw }
    }

    const fieldsToUpdate: any = {}
    f.firstName && (fieldsToUpdate.firstName = f.firstName)
    f.lastName && (fieldsToUpdate.lastName = f.lastName)
    f.password && (fieldsToUpdate.password = f.password)

    const result = await this.friendCollection.findOneAndUpdate(
      { email },
      { $set: fieldsToUpdate },
      { returnOriginal: false }
    )

    if (!result.ok) {
      throw new ApiError("Email not found", 404)
    }


    return (this.convertObjectIdToId(result.value))
  }

  convertObjectIdToId(friend: any) {
    const copy = { ...friend }
    copy.id = copy._id.toString();
    delete copy._id;
    return copy;
  }
  /**
   * 
   * @param friendEmail 
   * @returns true if deleted otherwise false
   */
  async deleteFriend(friendEmail: string): Promise<boolean> {
    const deleteUser = await this.friendCollection.deleteOne({ email: friendEmail });
    if (deleteUser.result.n == 0) {
      return false;
    } else {
      return true;
    }
  }

  async getAllFriends(): Promise<Array<IFriend>> {
    const users: Array<any> = await this.friendCollection.find({},{ projection: { password: 0 } }).toArray();
    const allFriends = users.map(user => this.convertObjectIdToId(user))
    return allFriends as Array<IFriend>
  }
  
  /**
   * 
   * @param friendEmail 
   * @returns 
   * @throws ApiError if not found
   */
  async getFriend(friendEmail: string): Promise<IFriend> {
    try {
      const friend: IFriend = await this.friendCollection.findOne({ email: friendEmail })
      return friend
    } catch (err) {
      throw new ApiError(err)
    }
  }

  /**
   * Use this method for authentication
   * @param friendEmail 
   * @param password 
   * @returns the user if he could be authenticated, otherwise null
   */
  async getVerifiedUser(friendEmail: string, password: string): Promise<IFriend | null> {
    const friend: IFriend = await this.friendCollection.findOne({ email: friendEmail })
    if (friend && await bcrypt.compare(password, friend.password)) {
      return friend
    }
    return Promise.resolve(null)
  }

}

export default FriendsFacade;

