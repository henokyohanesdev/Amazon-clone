import React from 'react'
import Layout from '../../Components/Layout/Layout'
import Carousel from '../../Components/Carousel/Carousel'
import Catagories from '../../Components/Categories/Catagories'
import Products from '../../Components/Products/Products'

export default function Landing() {
  return (
    <Layout>
      <Carousel />
      <Catagories />
      <Products />
    </Layout>
  )
}
