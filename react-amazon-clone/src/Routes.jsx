import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import Auth from './pages/Auth/Auth'
import Account from './pages/Auth/Account'
import Payment from './pages/Payment/Payment'
import Orders from './pages/Orders/Orders'
import Cart from './pages/Cart/Cart'
import Results from './pages/Results/Results'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute' 

const stripePromise = loadStripe(
  "pk_test_51Q4abuGPCB9Kw23MvZOl4ZK9fjeDr3aWTlQMJ5fV9scVrHHlsmB7yzjldTpL80Jn5MrIUm7Qa3ov9ySQrl8tsHyH00qz7wJD2v"
);

export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route exact path='/auth' element={<Auth />} />
        <Route exact path='/account' element={<Account />} />
        <Route exact path='/payment' element={<ProtectedRoute msg="Please login first" redirect="/payment"> <Elements stripe={stripePromise}> <Payment /> </Elements> </ProtectedRoute>} />
        <Route exact path='/orders' element={<ProtectedRoute msg="Please login first" redirect="/orders"> <Orders /> </ProtectedRoute>} /> 
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/category/:categoryName' element={<Results />} />
        <Route exact path='/products/:productId' element={<ProductDetail />} />
      </Routes>
    </Router>
  )
}

