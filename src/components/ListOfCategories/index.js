import React, { useState, useEffect, Fragment } from 'react'
import { Category } from '../Category'
import { ListUl, Item } from './style'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    window.fetch('https://petgram-server-bzk54zohe.now.sh/categories')
      .then(response => response.json())
      .then(data => setCategories(data))

    setLoading(false)
  }, [])

  return { categories, loading }
}

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  })

  const renderList = (fixed) => (
    <ListUl fixed={fixed}>
      {
        loading
          ? <Item key='loading'><Category /></Item>

          : categories.map(category => <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>)
      }
    </ListUl>
  )

  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)
