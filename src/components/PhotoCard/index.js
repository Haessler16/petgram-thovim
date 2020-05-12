import React, { Fragment, useState } from 'react'
import { ImgWrapper, Img, Article } from './style'
import { ButtonFav } from '../ButtonFav'
import PropTypes from 'prop-types'

import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'

// import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'

import { Link } from '@reach/router'
import { Error } from '../ButtonFav/style'

const DEFAULT_IMAGE = 'http://localhost:8080/api/assets/photo-1518791841217-8f162f1e1131.jpeg'

export const PhotoCard = ({ id, src = DEFAULT_IMAGE, likes = 0, liked }) => {
  // const key = `like-${id}`
  // const [liked, setLiked] = useLocalStorage(key, false)
  const [error, setError] = useState('')
  const [show, element] = useNearScreen()

  return (
    <Article ref={element}>
      {
        show && <Fragment>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt='Animal Photo' />
            </ImgWrapper>
          </Link>
          <ToggleLikeMutation>
            {
              (toggleLike) => {
                const handleFavClick = () => {
                  toggleLike({ variables: {
                    input: { id }
                  }
                  }).catch(error => setError(error.graphQLErrors[0].message))
                }

                return <ButtonFav error={error} likes={likes} liked={liked} onClick={handleFavClick} />
              }
            }
          </ToggleLikeMutation>
        </Fragment>
      }
    </Article>
  )
}

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  likes: (props, propName, componentName) => {
    const propValue = props[propName]
    if (propValue === 'undefined') {
      return new Error(`${propName} value must be defined`)
    }
    if (propValue < 0) {
      return new Error(`${propName} value must be greater than 0`)
    }
  }
}
