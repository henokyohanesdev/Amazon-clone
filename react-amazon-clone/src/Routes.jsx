import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import SignIn from './pages/SignIn/SignIn'
import Payment from './pages/Payment/Payment'
import Orders from './pages/Orders/Orders'
import Cart from './pages/Cart/Cart'
import Results from './pages/Results/Results'
import ProductDetail from './pages/ProductDetail/ProductDetail'

export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route exact path='/signin' element={<SignIn />} />
        <Route exact path='/payment' element={<Payment />} />
        <Route exact path='/orders' element={<Orders />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/category/:categoryName' element={<Results />} />
        <Route exact path='/products/:productId' element={<ProductDetail />} />
      </Routes>
    </Router>
  )
}

