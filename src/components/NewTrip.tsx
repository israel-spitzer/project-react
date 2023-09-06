import React from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom'

interface TravelPackage {
    id: string;
    name: string;
    destination: string;
    startDate: string;
    endDate: string;
    description: string;
    price: number;
    image: string;
    activities: string | string[];
  }



export default function NewTrip() {
    const { register, handleSubmit } = useForm<TravelPackage>({
        mode: "onSubmit",
    });
    const navigate = useNavigate()

    const onSubmit = (senddata: TravelPackage) => {
        senddata.activities = (senddata.activities as string).split(' ')
        console.log(senddata);
        fetch(`http://localhost:3000/api/trips`, {
            method: 'POST',
            headers: {
              authorization: 'test-token',
              "content-type": "application/json"
            },
            body: JSON.stringify(senddata)
          })
          .then(response => {response?.ok ? navigate("/NewTripSucces") : navigate("/ErrorNewTrip")})
    };


    return (
        <>
            <Link to="/Trips"><button>All trips</button></Link>
            <div><h1>NewTrip</h1></div>

            <form onSubmit={handleSubmit(onSubmit)}>
                Name-<input type="text" {...register("name")} /><br />
                Destination-<input type="text" {...register("destination")} /><br />
                Startdate-<input type="text" {...register("startDate")} /><br />
                Enddate-<input type="text" {...register("endDate")} /><br />
                Description-<input type="text" {...register("description")} /><br />
                Price-<input type="text" {...register("price")} /><br />
                Image-<input type="text" {...register("image")} /><br />
                Activities-<input type="text" {...register("activities")} /><br /><br />

                <button type="submit">Submit</button>
            </form>
        </>
    )
}
