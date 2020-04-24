import React, { Fragment } from 'react'
import { ImgWrapper, Img, Article } from './style'
import { ButtonFav } from '../ButtonFav'

import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'

import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'

import { Link } from '@reach/router'

const DEFAULT_IMAGE = 'http://localhost:8080/api/assets/photo-1518791841217-8f162f1e1131.jpeg'

export const PhotoCard = ({ id, src = DEFAULT_IMAGE, likes = 0 }) => {
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
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
                  !liked && toggleLike({ variables: {
                    input: { id }
                  }
                  })
                  setLiked(!liked)
                }

                return <ButtonFav likes={likes} liked={liked} onClick={handleFavClick} />
              }
            }
          </ToggleLikeMutation>
        </Fragment>
      }
    </Article>
  )
}
