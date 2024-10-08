import React from 'react'
import styles from './Category.module.css'
import { Link } from 'react-router-dom'

export default function Category(data) {
  return (
    <>
      <Link to={`/category/${data.name}`} className={styles.category}>
        <p className={styles.category_title}>{data.title}</p>
        <img src={data.image} alt="category" />
        <p className={styles.category_text}>Shop now</p>
      </ Link>
    </>
  );
}
