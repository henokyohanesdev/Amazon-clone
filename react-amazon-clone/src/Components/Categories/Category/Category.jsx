import React from 'react'
import styles from './Category.module.css'

export default function Category(data) {
  return (
    <div className={styles.category}>
      <p className={styles.category_title}>{data.title}</p>
      <img src={data.image} alt="category" />
      <p className={styles.category_text}>Shop now</p>
    </div>
  )
}
