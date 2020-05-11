import React, { Fragment } from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCard } from '../container/ListOfPhotoCard'
import { Helmet } from 'react-helmet'

export const Home = ({ id }) => {
  return (
    <Fragment>
      <Helmet>
        <title>Petgram-Home</title>
        <meta name='description' content='Con esta App puedes ver imagenes de tus mascotas favoritas' />
      </Helmet>

      <ListOfCategories />
      <ListOfPhotoCard categoryId={id} />
    </Fragment>
  )
}
