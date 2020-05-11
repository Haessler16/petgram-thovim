import React from 'react'
import { MdErrorOutline } from 'react-icons/md'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import { ListOfFavs } from '../components/ListOfFavs'

const GET_FAVS = gql`
query getFavs {
    favs {
        id
        categoryId
        src
        likes
        userId
    }
  }
`
const renderProp = ({ data, loading, error }) => {
  if (loading) return <h1>LOADING...</h1>
  if (error) return <h1>Error <MdErrorOutline /></h1>

  const { favs } = data
  return <ListOfFavs favs={favs} />
}

export const FavWithQuery = () => <Query query={GET_FAVS} fetchPolicy={'cache-and-network'}>{renderProp}</Query>
