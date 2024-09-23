import React from 'react'
import Rating from '@mui/material/Rating'
import { IoIosArrowDown } from "react-icons/io";
import CurrencyFormat from '../../CurrencyFormat/CurrencyFormat'
import styles from '../Products.module.css'

export default function SingleProduct({ image, title, rating, price }) {

  const truncate = (str, n) =>
    str?.length > n ? str.substr(0, n - 1) + "..." : str;
  return (
    <div className={styles.product}>
      <a href="">
        <img src={image} alt="Product image" />
      </a>
      <div>
        <p className={styles.title}>{truncate(title, 40)}</p>
        <div className={styles.rating}>
          <Rating value={rating.rate} precision={0.1} sx={{ fontSize: { xs: "2.5vw", sm: "1.5vw" } }} />
          <IoIosArrowDown className={styles.arrow} />
          <p className={styles.count}>{rating.count}</p>
        </div>
        <div className={styles.price}>
          <CurrencyFormat value={price} />
        </div>
        <button className={styles.button}>Add to Cart</button>
      </div>
    </div>
  )
}
