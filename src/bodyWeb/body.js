import React from "react";
import VerticalNav from "./VerticalNav/VerticalNav.js";
import Logic from '../Ncomponent/Logic/index.jsx'
import View from '../Ncomponent/View/index.jsx'
import Input from "../Tcomponent/Input/input.js";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Redirect,
  Prompt,
  withRouter,
} from 'react-router-dom'
import './body.scss'

const Body = () => {
    return (
        <main className='body-web'>
            <VerticalNav />
            {/* tất cả body viết trong div body-main  này */}
            <Switch>
                <div className='body-main'>
                    <Route exact path='/bai_viet' component={Logic}/>
                    <Route exact path='/bai_viet' component={View}/>
                    <Route exact path='/tao' component={Input}/>
                </div>
            </Switch>
        </main>
    )
}

export default Body