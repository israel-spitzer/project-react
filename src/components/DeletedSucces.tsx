import React from 'react'
import { Link } from 'react-router-dom'

export default function DeletedSucces() {
  return (
    <div>
        <h2>Deleted succesfully!</h2>
        <Link to="/Trips"><button>Return to all trips</button></Link>
    </div>
  )
}
