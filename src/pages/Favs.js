import React from 'react'
import { FavWithQuery } from '../container/GetFavorites'
import { Layout } from '../components/Layout'

export const Favs = () => {
  return (
    <Layout title='Favs' subtitle='Aqui puedes ver tus fotos favoritas a las que le as dado like'>
      <FavWithQuery />
    </Layout>
  )
}
