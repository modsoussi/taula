import './App.css'

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  IndexRoute
} from 'react-router-dom'

import Home from '../Home/Home'
import About from '../About/About'
import Restaurants from '../Restaurants/Restaurants'
import Connect from '../Connect/Connect'
import Restaurant from '../Restaurant/Restaurant'

const TaulaApp = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/connect">Connect</Link></li>
        <li><Link to="/restaurants">Restaurants</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={Home}/>
      <Route path="/connect" component={Connect}/>
      <Route path="/about" component={About}/>
      <Route path="/restaurants" component={Restaurants}/>
      <Route path="/r/:restaurantId" component={Restaurant} />

    </div>
  </Router>
)
export default TaulaApp
