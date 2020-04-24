import React from 'react'
import { ListOfPhotoCardWithQuery } from '../container/ListOfPhotoCardWithQuery'

export const Detail = ({ detailId }) => {
  return (
    <div>
      <ListOfPhotoCardWithQuery id={detailId} />
    </div>
  )
}
