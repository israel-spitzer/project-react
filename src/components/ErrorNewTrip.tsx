import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorNewTrip() {
  return (<>
    <div><h3>Error while updating new trip</h3></div>
    <Link to="/Trips"><button>All trips</button></Link>
    </>
  )
}
