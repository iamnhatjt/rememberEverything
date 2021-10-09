import React from 'react'
import Body from './bodyWeb/body'
import './style/app.scss'
import Navbar from './Tcomponent/navbar/navbar.js'
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return(
    <Router>
      <>
          <Navbar />
          <Body />
      </>
    </Router>
  )
}

export default App

