import Restaurant from '../Restaurant/Restaurant'
import React from 'react'
import {
  Link,
  Route
} from 'react-router-dom'

const Restaurants = ({ match }) => {
  return(
    <div>
      <h2>Restaurants</h2>
      <ul>
        <li>
          <Link to="/r/punta-playa">Punta Playa</Link>
        </li>
        <li>
          <Link to="/r/rastacabana">Rastacabana</Link>
        </li>
        <li>
          <Link to="/r/madera">Madera</Link>
        </li>
        <li>
          <Link to="/r/brazilia">Brazilia</Link>
        </li>
      </ul>
    </div>
  )
}

export default Restaurants