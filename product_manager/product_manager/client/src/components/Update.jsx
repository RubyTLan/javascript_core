import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {useParams, useNavigate, Link} from 'react-router-dom'

const Update = () => {
    const [title,setTitle]=useState("");
    const [price,setPrice]=useState("");
    const [description,setDescription]=useState("");
    const navigate=useNavigate();
    const {id}=useParams()

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/"+id)
        .then((response) => {
            setTitle(response.data.title);
            setPrice(response.data.price);
            setDescription(response.data.description);
        })
        .catch((error) => {
            console.log(error);
          })
      },[id])


    const handleSubmit=(e)=>{
      e.preventDefault();
      axios.put(`http://localhost:8000/api/products/update/${id}`,{title,price,description})
      .then((response) => {
        navigate("/")
        })
      .catch((error) => {
        console.log(error);
        })
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label >Title:</label>
            <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
          </div>
          <div>
            <label >Price:</label>
            <input type="number"  value={price} onChange={(e)=>{setPrice(e.target.value)}} />
          </div>
          <div>
            <label >Description:</label>
            <input type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}}  />
          </div>
          <button>update</button>


        </form>

    </div>
  )
}

export default Update
