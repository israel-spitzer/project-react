import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function DeleteTrip() {
    const { id ,name} = useParams()
    const navigate = useNavigate()

    return (<>
        <div>
            <h1>DeleteTrip</h1>
            <h2>Are you sure you want to delete trip {name}???<br />(this couldnt be ondone)</h2>
                <Link to='/Trips'><button>Cancel</button></Link>
                <button onClick={
                    () => fetch(`http://localhost:3000/api/trips/${id}`,{method:"DELETE"})
                    .then(response => {response?.ok ? navigate("/DeletedSucces") : navigate("/ErrorDelete")})
                }>Delete</button>
        </div>

    </>
    )
}
