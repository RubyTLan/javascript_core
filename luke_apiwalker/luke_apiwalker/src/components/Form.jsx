import React, {useState,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import axios from 'axios';


const Form=() =>{

    const [search, setSearch] = useState('People');
    const [searchId, setSearchId] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate(`/${search.toLowerCase()}/${searchId}`);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Search for: </label>
                <select onChange={ e=>setSearch(e.target.value)}>
                    <option >People</option>
                    <option >Planets</option>
                </select>
                <label>ID: </label>
                <input type='number' onChange={ e=>setSearchId(e.target.value) } />
                <button> Search </button>
            </form>
        </div>
    )
}


const People=()=> {

    const [responseData, setResponseData] = useState('');
    const {id}=useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}/`)
        .then(response=>{setResponseData(response.data)})
        console.log(responseData)

    }, [id]);

    return (
        <div>
            <h2>Name: {responseData.name}</h2>
            <p>Height: {responseData.height}</p>
            <p>Mass: {responseData.mass}</p>
            <p>Hair Color: {responseData.hair_color}</p>
            <p>Skin Color: {responseData.skin_color }</p>
        </div>
    )
}


const Planets=()=> {

    const [responseData, setResponseData] = useState('');
    const {id}=useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}/`)
        .then(response=>{setResponseData(response.data)})
        console.log(responseData)

    }, [id]);

    return (
        <div>
            <h2>Name: {responseData.name}</h2>
            <p>Climate: {responseData.climate}</p>
            <p>Terrain: {responseData.terrain}</p>
            <p>Surface Water: {responseData.surface_water}</p>
            <p>Resident: {responseData.population}</p>
        </div>
    )
}


export {Form,People,Planets};








// import React, { useState, useEffect } from "react";
// import axios from 'axios';
// import { useParams } from "react-router";
// import { useNavigate } from "react-router-dom";


// const Form = () => {
//     const [search, setSearch] = useState("People");
//     const [id, setId] = useState("");
//     const [responseData, setResponseData] = useState(null);
//     const navigate = useNavigate();
//     // {search, id } = useParams();


//     const submitSearch = (e) => {
//         e.preventDefault();

//         }

//   return (
//     <div>
//         <form onSubmit={submitSearch}>
//             <label >Search for:</label>
//             <select onChange={ (e) => setSearch(e.target.value)} >
//                 <option >People</option>
//                 <option >Planets</option>
//             </select>

//             <label >ID:</label>
//             <input type="number" onChange={ (e) => setId(e.target.value) } />

//             <button type="submit" >Search</button>
//         </form>

//     </div>

//   )
// }
// const People=()=>{
//     // const [people, setPeople] = useState([]);

//     useEffect(() => {

    //     axios.get(`https://swapi.dev/api/people/${id}/`)
    //     .then(response=>{setResponseData(response.data)})
    //     console.log(responseData)
    // }, []);

//     return (
//         <div>
//             {people.length > 0 && people.map((person, index)=>{
//                 return (<div key={index}>{person.name}</div>)
//             })}
//         </div>
//     );

// }
// export default Form; People
