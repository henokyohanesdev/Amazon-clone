import React, { useState, useEffect } from 'react'
import Layout from '../../Components/Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import SingleProduct from '../../Components/Products/Singleproduct/Singleproduct'
import styles from './Results.module.css'

export default function Results() {

  const [result, setresult] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then(res => {
        setresult(res.data)
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [categoryName])
  return (
    <Layout>
      <p className={styles.title}>Category / {categoryName}</p>
      <div className={styles.products}>
        {result.map((product) => (
          <SingleProduct key={product.id} {...product} />
        ))}
      </div>
    </Layout>
  )
}
