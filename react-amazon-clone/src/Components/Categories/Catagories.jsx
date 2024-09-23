import React from 'react';
import Category from './Category/Category';
import categoryData from '../../utils/categoryData';
import styles from './category/Category.module.css';

export default function Catagories() {

  return (
    <div className={styles.categories_container}>
      <div className={styles.categories}>
        {categoryData.map((data) => (
          <Category key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
}
