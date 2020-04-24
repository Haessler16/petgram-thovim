import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCardComponent = ({ data: { photos = [], loading, error } } = {}) => {
  if (loading) return <h1>LOADING...</h1>
  if (error) return <h1>{error.message}</h1>
  return (
    <ul>
      {
        photos.map(photo => <PhotoCard key={photo.id} {...photo} />)
      }
    </ul>
  )
}
