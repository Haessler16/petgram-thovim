import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const GET_SINGLE_PHOTO = gql`
query getSinglePhoto($id:ID!){
    photo(id: $id){
        id
        categoryId
        src
        likes
        userId
        liked
    }
}
`
const renderProp = ({ loading, error, data }) => {
  const { photo = {} } = data
  if (loading) return <h1>LOADING...</h1>
  if (error) return <h1>{error.message}</h1>

  return <PhotoCard {...photo} />
}
export const ListOfPhotoCardWithQuery = ({ id }) => {
  return (
    <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
      {renderProp}
    </Query>
  )
}
