import React from 'react'
import Category from './Category/Category'
import categoryData from '../../utils/catagoryData'

export default function Catagories() {
  return (
    <>
      {categoryData.map((data) => (
        <Category key={data.id} {...data} />
      ))}
    </>
  )
}
