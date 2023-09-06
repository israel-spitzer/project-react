import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function TripDetail() {
    const [state, setState] = useState<any>(null)

    const { id } = useParams()
    fetch(`http://localhost:3000/api/trips/${id}`)
        .then(data => data.json())
        .then(data => setState(data))
    return (<>
        <Link to="/Trips"><button>All trips</button></Link>
        <div>
            <img src={`${state?.image}`} alt="view" style={{width:"100vh"}}/>
            <h1>TripDetails</h1>
            <br />Trip name: {state?.name}
            <br />Destination: {state?.destination}
            <br />Startdate: {state?.startDate}
            <br />Enddate: {state?.endDate}
            <br />Description: {state?.description}
            <br />Price: {state?.price}
            <br />Activities: {state?.activities}
        </div>
        <Link to={`/UpdateTrip/${state?.id }`}><button>Update trip</button></Link>
    </>
    )
}
