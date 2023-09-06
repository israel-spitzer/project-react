import React from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom'

interface user{
    email:string;
    password:string
}


export default function UserRegistration() {

    const { register, handleSubmit } = useForm<user>({
        mode: "onSubmit",
    });
    const navigate = useNavigate()

    const onSubmit = (senddata:user) => {
        console.log(senddata);
        fetch(`http://localhost:3000/api/trips`, {
            method: 'POST',
            headers: {
              authorization: 'test-token',
              "content-type": "application/json"
            },
            body: JSON.stringify(senddata)
          })
          .then(response => {response?.ok ? navigate("/NewUserSucces") : navigate("/ErrorNewUser")})
    };

    return (<>
        <Link to="/"><button>Home</button></Link>
        <div><h1>UserRegistration</h1></div>
        <form onSubmit={handleSubmit(onSubmit)}>
                Email-<input type="text" {...register("email")} /><br />
                Password-<input type="text" {...register("password")} /><br />
                <button type="submit">Submit</button>
            </form>
        
        </>
    )
}
