import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function tripCard(name: string, link: any, deleteButton: any) {
    return <div style={{ border: "solid" }}><h2>{name}</h2>{link}{deleteButton}</div>
}


export default function Trips() {
    const [state, setState] = useState([])
    fetch("http://localhost:3000/api/trips")
        .then(data => data.json())
        .then(data => setState(data))

    return (<>
        <Link to="/"><button>Home</button></Link>
        <div><h1>Trips</h1></div>
        <div>{state.map(trip => tripCard(trip.name, <Link to={`/TripDetail/${trip.id}`} ><button>Trip Details</button></Link>, <Link to={`/DeleteTrip/${trip.id}/${trip.name}`}><button>Delete</button></Link>
        ))}</div>
        <Link to="/NewTrip"><button>New Trip</button></Link>
    </>
    )
}
