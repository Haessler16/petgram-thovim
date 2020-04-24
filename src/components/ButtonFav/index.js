import React, { Fragment } from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Button } from './style'

export const ButtonFav = ({ likes, liked, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Fragment>
      <Button onClick={onClick}>
        <Icon size='32px' /> {likes} Likes!
      </Button>
    </Fragment>
  )
}
