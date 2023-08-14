import React, { useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Planets = () =>{
    const {id} = useParams()
    const [planet, setPlanet]= useState('');

    useEffect(()=> {
    axios.get(`https://swapi.dev/api/planets/${id}`)
        //.then(response => console.log(response.data))
        //.then(response => setPlanet(response.data))
        .then(response => {
            setPlanet(response.data)
        })
        .catch(err=>console.log(err));
    },[id])

    return(
        <div>{
            planet?
        <div>
            <h1>Planet Name: {planet.name}</h1> 
            <h3>Climate: {planet.climate}</h3>
            <h3>Terrain: {planet.terrain}</h3>
            <h3>Surface Water: {planet.surface_water}</h3>
            <h3>Population: {planet.population}</h3>
        </div>:
            <h1>Searching...</h1>
            }
    </div>)
}

export default Planets