import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import AppRoute from './components/AppRoute/AppRoute';
import { auth, firestore } from "./firebase";



const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <AppRoute />
    </BrowserRouter>
  )
}

export default App
