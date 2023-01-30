import React,{useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Create = () => {
  const [title,setTitle]=useState("");
  const [price,setPrice]=useState("");
  const [description,setDescription]=useState("");
  const navigate=useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post(`http://localhost:8000/api/products/create`,{title,price,description})
    .then((response) => {
      console.log(response.data)
      })
    .catch((error) => {
      console.log(error);
      })
  }
  return (
    <div>
        <h1>Product Manager</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label >Title:</label>
            <input type="text" onChange={(e)=>{setTitle(e.target.value)}} />
          </div>
          <div>
            <label >Price:</label>
            <input type="number"  onChange={(e)=>{setPrice(e.target.value)}} />
          </div>
          <div>
            <label >Description:</label>
            <input type="text" onChange={(e)=>{setDescription(e.target.value)}}  />
          </div>
          <button>Create</button>

        </form>

    </div>
  )
}

export default Create
