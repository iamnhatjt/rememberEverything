import React from 'react'
import Body from './bodyWeb/body'
import './style/app.scss'
import Navbar from './Tcomponent/navbar/navbar.js'

const App = () => {
  return(
    <>
      <Navbar />
      {/* toàn quyền là của thịnh */}
      <Body />
    </>
  )
}

export default App
