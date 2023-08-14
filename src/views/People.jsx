import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const People = () =>{
    const {id} = useParams()
    const [person, setPerson]= useState('');

    useEffect(()=> {
    axios.get(`https://swapi.dev/api/people/${id}`)
        //.then(response => console.log(response.data))
        .then(response => {
            setPerson(response.data)
        })
        .catch(err=>console.log(err));
    },[id])

    return(
        <fieldset>
            <legend>People</legend>
        {
            person?
        <div>
            <h1>Name: {person.name}</h1> 
            <h3>Height: {person.height}</h3>
            <h3>Mass: {person.mass}</h3>
            <h3>Hair Color: {person.hair_color}</h3>
            <h3>Skin Color: {person.skin_color}</h3>
        </div>:
            <h1>Searching...</h1>
        }
        </fieldset>
    )
}

export default People