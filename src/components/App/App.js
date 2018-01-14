import './App.css'

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  IndexRoute
} from 'react-router-dom'

import Home from 'components/Home/Home'
import About from 'components/About/About'
import Restaurants from 'components/Restaurants/Restaurants'
import Connect from 'components/Connect/Connect';

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

    </div>
  </Router>
)
export default TaulaApp
