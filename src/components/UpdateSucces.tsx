import React from 'react'
import { Link } from 'react-router-dom'

export default function UpdateSucces() {
  return (<>
    <div><h3>Updated succesfully</h3></div>
    <Link to="/Trips"><button>Return to all trips</button></Link>
    </>
  )
}
