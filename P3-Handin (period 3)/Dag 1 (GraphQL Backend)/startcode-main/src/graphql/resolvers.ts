import FriendFacade from '../facades/friendFacade';
import { IFriend } from '../interfaces/IFriend';
import { ApiError } from '../error/errors';
import { Request } from "express";
import fetch from "node-fetch";
import PositionFacade from '../facades/positionFacade';

let friendFacade: FriendFacade;
let positionFacade: PositionFacade;

interface IPositionInput {
    email: string
    longitude: number
    latitude: number
}

export function setupFacade(db: any) {
    if (!friendFacade) {
        friendFacade = new FriendFacade(db)
    }
    if (!positionFacade) {
        positionFacade = new PositionFacade(db)
    }
}

// resolver map
export const resolvers = {
    Query: {

        getAllFriends: (root: any, _: any, context: any) => {

            if (!context.credentials) {
                throw new ApiError("Not Authorized", 401)
            }

            return friendFacade.getAllFriends()

        },

        getFriend: (root: any, _: any, context: any) => {
            if (!context.credentials) {
                throw new ApiError("Not Authorized", 401)
            }

            return friendFacade.getFriend(context.credentials.email)
        },


        getFriendByEmail: async (_: object, { email }: { email: string }, context: any) => {

            if (!context.credentials || context.credentials.role !== "admin") {
                throw new ApiError("Not Authorized", 401)
            }

            return friendFacade.getFriend(email)
        },
        getFriendById: async (_: object, { id }: { id: string }, context: any) => {

            if (!context.credentials || context.credentials.role !== "admin") {
                throw new ApiError("Not Authorized", 401)
            }

            return friendFacade.getFriend(id)
        },
        getGameArea: async (root: object, _: any, context: any) => {
            return positionFacade.getGameArea()
        },



        getAllFriendsProxy: async (root: object, _: any, context: Request) => {

            let options: any = { method: "GET" }
            const auth = context.get("authorization");
            if (auth) {
                options.headers = { 'authorization': auth }
            }
            return fetch(`http://localhost:${process.env.PORT}/api/friends/all`, options).then(r => {
                if (r.status >= 400) { throw new Error(r.statusText) }
                return r.json()
            })
        }
    },
    Mutation: {
        createFriend: async (_: object, { input }: { input: IFriend }) => {
            return friendFacade.addFriend(input)
        },
        editFriend: async (_: object, { input }: { input: IFriend }, context: any) => {

            if (!context.credentials) {
                throw new ApiError("Not Authorized", 401)
            }

            return friendFacade.editFriend(context.credentials.email, input)
        },
        deleteFriend: async (_: object, { email }: { email: string }, context: any) => {
            if (!context.credentials || context.credentials.role !== "admin") {
                throw new ApiError("Not Authorized", 401)
            }

            return friendFacade.deleteFriend(email)
        },
        adminEditFriend: async (_: object, { input }: { email: string, input: IFriend }, context: any) => {

            if (!context.credentials || context.credentials.role !== "admin") {
                throw new ApiError("Not Authorized", 401)
            }

            return friendFacade.editFriend(input.email, input)
        },
        addPosition: async (_: object, { input }: { input: IPositionInput }, context: any) => {

            // if (!context.credentials) {
            //     throw new ApiError("Not Authorized", 401)
            // }
            try {
                positionFacade.addOrUpdatePosition(input.email, input.longitude, input.latitude)
                return true
            } catch (err) {
                return false
            }
        },
        nearbyFriends: async (_: object, { input, distance }: { input: IPositionInput, distance: number }) => {


            const res = await positionFacade.findNearbyFriends(input.email, input.longitude, input.latitude, distance)
            return res
        }
    }
};