import React, { useState } from 'react'
import Trips from './Trips'
import { BrowserRouter as Router, Routes, Route ,Link} from 'react-router-dom';




export default function Home() {

  return (<>
    <div><h1>Home</h1></div>
    <Link to="/Trips"><button>All trips</button></Link>
    <Link to="/UserRegistration"><button>User registration</button></Link>
    <Link to="/UserLogin"><button>User login</button></Link>
    </>
  )
}
