import React from 'react'
import Body from './bodyWeb/body'
import './style/app.scss'
import Navbar from './Tcomponent/navbar/navbar.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { store } from './Tcomponent/Tstore/Tstore'
import { Provider } from 'react-redux'
import Login from './Tcomponent/login_regis/login_regisSlice'

const App = () => {
  
  return(
    <Router>
      <Switch>
        <Provider store={store}>
          <Route exact path="/">
            <>
                <Navbar />
                <Body />
            </>
          </Route>
          <Route exact path="/login">
                <Login />
          </Route>
        </Provider>
      </Switch>
    </Router>
  )
}

export default App

