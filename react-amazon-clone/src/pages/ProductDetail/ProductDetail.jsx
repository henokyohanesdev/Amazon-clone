import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import SingleProduct from "../../Components/Products/SingleProduct/SingleProduct";
import styles from './ProductDetail.module.css'

export default function ProductDetail() {

  const {productId} = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then(res => {
        setProduct(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [productId]);
  return (
    <Layout>
      <p className={styles.title}>Product Detail</p>
      <div className={styles.product_detail}>
      <SingleProduct {...product} />
      </div>
    </Layout>
  )
}
