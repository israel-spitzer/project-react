import React, { useEffect, useState } from 'react'
import { Form, useForm, useWatch } from 'react-hook-form'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'

interface TravelPackage {
    id: string;
    name: string;
    destination: string;
    startDate: string;
    endDate: string;
    description: string;
    price: number;
    image: string;
    activities: string[] | string;
  }

export default function UpdateTrip() {
    const { register, handleSubmit, reset } = useForm<TravelPackage>({
        mode: "onSubmit",
    });
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:3000/api/trips/${id}`)
            .then((data) => data.json())
            .then((data: TravelPackage) => {
                reset(data);
            });
    }, []);

    const onSubmit = (senddata: TravelPackage) => {
        senddata.activities = (senddata.activities as string).split(' ')
        console.log(senddata);
        fetch(`http://localhost:3000/api/trips/${id}`, {
            method: 'PUT',
            headers: {
              authorization: 'test-token',
              "content-type": "application/json"
            },
            body: JSON.stringify(senddata)
          })
          .then(response => {response?.ok ? navigate("/UpdateSucces") : navigate("/ErrorUpdate")})
    };

    return (
        <>
            <Link to={`/TripDetail/${id}`}><button>TripDetails</button></Link>
            <h1>UpdateTrip</h1>
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
    );
}
