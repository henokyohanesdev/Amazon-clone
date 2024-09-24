import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import SignIn from './pages/SignIn/SignIn'
import Payment from './pages/Payment/Payment'
import Orders from './pages/Orders/Orders'
import Cart from './pages/Cart/Cart'

export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route exact path='/signin' element={<SignIn />} />
        <Route exact path='/payement' element={<Payment />} />
        <Route exact path='/orders' element={<Orders />} />
        <Route exact path='/cart' element={<Cart />} />
      </Routes>
    </Router>
  )
}

