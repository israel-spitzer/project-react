import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorUpdate() {
  return (<>
    <div><h3>Error while updating trip.<br/>Please try again later</h3></div>
    <Link to="/Trips"><button>Return to all trips</button></Link></>
  )
}
