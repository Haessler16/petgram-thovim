import React from 'react'
import { Image, Grid, Link } from './style'

export const ListOfFavs = ({ favs = [] }) => {
  return (
    <Grid>
      {favs.map(fav => (
        <Link key={fav.id} to={`/detail/${fav.id}`}>
          <Image src={fav.src} alt='Fav Image' />
        </Link>
      ))}
    </Grid>
  )
}
