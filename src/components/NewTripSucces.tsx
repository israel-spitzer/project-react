import React from 'react'
import { Link } from 'react-router-dom'

export default function NewTripSucces() {
  return (<>
    <div><h3>New trip updated succesfully</h3></div>
    <Link to="/Trips"><button>All trips</button></Link>
    </>
  )
}
