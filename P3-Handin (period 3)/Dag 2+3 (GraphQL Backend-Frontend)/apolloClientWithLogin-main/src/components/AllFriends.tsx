/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useQuery, gql } from "@apollo/client"
import { IFriend } from "../interfaces/IFriend";

interface IFriends {
  getAllFriends: IFriend[]
}

export const ALL_FRIENDS = gql`
query {
  getAllFriendsProxy
  {
    id
    firstName
    lastName
    email
    role
  }
}
`

export default function All() {

  const { loading, error, data, refetch } = useQuery<IFriends>(
    ALL_FRIENDS,
    {
      fetchPolicy: "cache-and-network"
      // pollInterval: 1000 AUTOMATISK REQUEST. JAVASCRIPT setInterval.
    }
  )

  if (loading) return <p> Loading...</p>
  if (error) return <p> {JSON.stringify(error)}</p>
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
          </tr>
        </thead>
        <tbody>
          {data && data.getAllFriends.map(f => (
            <tr key={f.id}>
              <td>{f.firstName}</td>
              <td>{f.lastName}</td>
            </tr>
          )
          )}
        </tbody>
      </table>
      <button onClick={() => refetch()}>Refetch</button>
    </div>
  )
}