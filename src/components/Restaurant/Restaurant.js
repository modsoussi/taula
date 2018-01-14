import React from 'react'

const restaurants = {
  "punta-playa" : {
    name: "Punta Playa",
    availabile: true
  },
  "madera": {
    name: "Madera",
    availabile: true
  },
  "rastacabana": {
    name: "Rastacabana",
    availabile: false
  },
  "brazilia": {
    name: "Brazilia",
    availabile: true
  }
}

const Restaurant = ({ match }) => {
  return(
    <div>
      <h3>{restaurants[match.params.restaurantId].name}</h3>
      <h5>{restaurants[match.params.restaurantId].availabile ? 
        <button onClick={() => alert("Reservation reussie")}>Reserver</button> : "Complet pour cette date"}</h5>
    </div>
  )
}

export default Restaurant