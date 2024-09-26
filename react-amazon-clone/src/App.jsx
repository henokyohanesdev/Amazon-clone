import React, { useEffect, useContext } from 'react'
import Routing from './Routes';
import { DataContext } from './Components/DataProvider/DataProvider';
import { ActionTypes } from './utils/actionType';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fontsource/montserrat";
import './App.css'
import { auth } from './utils/firebase';

export default function App() {

  const [{ user }, dispatch] = useContext(DataContext)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({ type: ActionTypes.SET_USER, user })
      } else {
        dispatch({ type: ActionTypes.SET_USER, user: null })
      }
    })
    
  }, [])

  return (
    <>
      <Routing />
    </>
  )
}
