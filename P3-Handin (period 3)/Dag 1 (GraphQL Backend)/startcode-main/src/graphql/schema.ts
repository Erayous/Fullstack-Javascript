import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `#graphql
    type Friend {
        id: ID
        firstName: String
        lastName: String
        email: String
        password: String
        role: String
    }
    type Position {
        lastUpdated: String
        email: String
        name: String
        location: Point
    }
    type Point {
        type: String!
        coordinates: [Float]
    }

    type GameArea {
        type: String!
        coordinates: [[[Float]]]
    }

 
    """
    Queries
    """
    type Query {
        getAllFriends : [Friend]!
        getFriend : Friend
        getAllFriendsProxy: [Friend]!
        getFriendByEmail (email : String!) : Friend
        getFriendById (id : String!) : Friend
        getGameArea: GameArea
        
    }
    input FriendInput {
        ID: String
        firstName: String!
        lastName: String!
        password: String!
        email: String!
    }
    input FriendEditInput {
        firstName: String
        lastName: String
        email: String
        password: String
    }
    input PositionInput {
        email: String!
        longitude: Float!
        latitude: Float!
    }
  
    """
    Mutations 
    """

    type Mutation {
        createFriend(input: FriendInput): Friend
        editFriend(input: FriendEditInput): Friend
        deleteFriend(email : String) : Boolean
        adminEditFriend(input: FriendEditInput): Friend
        addPosition(input: PositionInput): Boolean!
        nearbyFriends(input: PositionInput, distance:Float):[Position]!
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };