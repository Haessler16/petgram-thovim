import React, { Fragment } from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Button, Error } from './style'
import PropTypes from 'prop-types'

export const ButtonFav = ({ likes, liked, onClick, error }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Fragment>
      <Button onClick={onClick}>
        <Icon size='32px' /> {likes} Likes!
      </Button>
      <Error>{error}</Error>
    </Fragment>
  )
}

ButtonFav.propTypes = {
  likes: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  error: PropTypes.string
}
