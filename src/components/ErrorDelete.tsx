import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorDelete() {
  return (
    <div>
        <h4>
        Error! Cannot delete trip. Please try again later
        </h4>
        <Link to="/Trips"><button>Return to all trips</button></Link>
    </div>
  )
}
