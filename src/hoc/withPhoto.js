import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'

const GET_PHOTOS = gql`
query getPhotos($categoryId: ID){
  photos(categoryId: $categoryId){
  id
  categoryId
  src
  likes
  userId
  liked
  }
}
`
export const withPhoto = graphql(GET_PHOTOS)
