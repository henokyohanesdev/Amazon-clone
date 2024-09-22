import React from 'react'
// import categoryData from '../../../utils/catagoryData'

export default function Category(data) {
  return (
    <>
      <p>{data.title}</p>
      <img src={data.image} alt="category" />
      <p>Shop now</p>
    </>
  )
}
