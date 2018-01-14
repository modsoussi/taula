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
          <Link to={`${match.url}/punta-playa`}>Punta Playa</Link>
        </li>
        <li>
          <Link to={`${match.url}/rastacabana`}>Rastacabana</Link>
        </li>
        <li>
          <Link to={`${match.url}/madera`}>Madera</Link>
        </li>
        <li>
          <Link to={`${match.url}/brazilia`}>Brazilia</Link>
        </li>
      </ul>
      
      <Route path={`${match.url}/:restaurantId`} component={Restaurant}/>
    </div>
  )
}

export default Restaurants