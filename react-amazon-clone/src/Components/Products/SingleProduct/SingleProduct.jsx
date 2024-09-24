import React from 'react'
import Rating from '@mui/material/Rating'
import { IoIosArrowDown } from "react-icons/io";
import CurrencyFormat from '../../CurrencyFormat/CurrencyFormat'
import { Link } from 'react-router-dom'
import styles from '../Products.module.css'

export default function SingleProduct({ image, id, title, rating, price }) {
  
  return (
    <div className={styles.product}>
      <div>
        <Link to={`/products/${id}`}>
          <img src={image} alt="Product image" />
        </Link>
      </div>
      <div>
        <p className={styles.title}>{title}</p>
        <div className={styles.rating}>
          <Rating
            value={rating?.rate || 0}
            precision={0.1}
            sx={{ fontSize: { xs: "2.5vw", sm: "1.5vw" } }}
          />
          <IoIosArrowDown className={styles.arrow} />
          <p className={styles.count}>{rating?.count || 0}</p>
        </div>
        <div className={styles.price}>
          <CurrencyFormat value={price} />
        </div>
        <button className={styles.button}>Add to Cart</button>
      </div>
    </div>
  );
}
