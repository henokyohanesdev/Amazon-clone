import React, { useContext, useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import { FaLock } from "react-icons/fa6";
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';

export default function Payment() {

  const [{user,cart}] = useContext(DataContext);
  const total = cart.reduce((total, item) => total + item.quantity, 0);
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);

  const handleChange = async (event) => {
    event.error ? setError(event.error.message) : setError(null);
  }

  return (
    <Layout>
      <div>
        <img src="" alt="amazon logo" />
        <p>Checkout (<span>{cart && total} items</span>)</p>
        <FaLock />
      </div>
      <div>
        <p>Delivery address</p>
        <div>
          <p>{user?.email}</p>
          <p>123456</p>
          <p>12121</p>
          <p>tx</p>
        </div>
      </div>
      <div>
        <p>Payment method</p>
        <div>
          <form action="" >
            {error && <small>{error}</small>}
            <CardElement onChange={handleChange}/>
          </form>
        </div>
        <button>place your order</button>
      </div>
    </Layout>
  )
}
