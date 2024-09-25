import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import Layout from '../../Components/Layout/Layout'
import SingleProduct from '../../Components/Products/SingleProduct/SingleProduct'
import styles from './Cart.module.css'
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat'

export default function Cart() {

  const [{cart, user}, dispatch] = useContext(DataContext);
  console.log(cart);
  return (
    <Layout>
      <div>
        <p className={styles.title}>Shopping Cart</p>
        {cart?.length === 0 ? (
          <div className={styles.cart_empty}>
            <p className={styles.empty_title}>Your cart is empty</p>
            <Link to="/products"> 
              <button className={styles.empty_btn}>Shop Now</button>
            </Link>
          </div>
        ) : (
          <div className={styles.cart_container}>
            {cart?.map((item, index) => (
              <SingleProduct key={index} {...item} cartdescription={true} flex={true} addButton={false}/>
            ))}
          </div>
        )} 

        {cart?.length > 0 && (<div className={styles.cart_total}>
          <div>
          <p className={styles.total_title}>Subtotal ({cart?.length} items) </p>
          <CurrencyFormat value={cart?.reduce((total, item) => total + item.price, 0)} />
          </div>
          <span>
            <input type="checkbox" />
            This order contains a gift
          </span>
          <Link to="/checkout">Proceed to Checkout</Link>
        </div>)}

      </div>


    </Layout>
  )
}
