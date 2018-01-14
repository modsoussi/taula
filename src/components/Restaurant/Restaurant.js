import React from 'react'

const Restaurant = ({ match }) => {
  return(
    <div>
      <h3>{match.params.restaurantId}</h3>
    </div>
  )
}

export default Restaurant