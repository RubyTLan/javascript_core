import React, {useState, useEffect} from 'react';
import axios from 'axios'

const Pokemon = () => {
    const [pokemon,setPokemon]=useState([]);
    const fetchData=()=>{
        axios.get("https://pokeapi.co/api/v2/ability/")
        .then((response) => {
            console.log(response.data)
            setPokemon(response.data.results);
        })
        .catch((error) => {
            console.log(error);
        })

    }

  return (
    <div>
        <button onClick={fetchData}>Fetch Pokemon</button>
        {
            pokemon.map((pokemon, index) => {
                return (
                    <div  key={index}>
                    <h1>{pokemon.name}</h1>
                    </div>
                );
            })
        }

    </div>
  )
}

export default Pokemon
