import React, { Fragment } from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCard } from '../container/ListOfPhotoCard'
import { Helmet } from 'react-helmet'

const HomeCompomponent = ({ id }) => {
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

export const Home = React.memo(HomeCompomponent, (prevprops, props) => {
  return prevprops.id === props.id
})
