import React from 'react'
import { Link, Image } from './style'
const DEFAULT_IMAGE = 'http://localhost:8080/api/assets/category_cats.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path = '#', emoji = '?' }) => (
  <Link to={path}>
    <Image src={cover} alt='Categorias de Animales' />
    {emoji}
  </Link>
)
