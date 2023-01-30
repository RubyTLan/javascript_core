import React, {useEffect,useState}from 'react';
import axios from 'axios';
import {useParams,Link, useNavigate} from 'react-router-dom';

const One = () => {
    const [product, setProduct]=useState("");
    const {id}=useParams()
    const navigate=useNavigate();
    useEffect(()=>{
        //calling backend
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((response) => {
            setProduct(response.data);
        })
        .catch((error) => {
            console.log(error);
          })
      },[id])


    const handleDelete=(e,id)=>{
    console.log(`delete ${id}`,e)
    axios.delete(`http://localhost:8000/api/products/delete/${id}`)
    .then((response) => {
        navigate("/")
    })
    .catch((error) => {
        console.log(error);
        })

    }

  return (
    <div>
        <p>{product.title}</p>
        <p>Price:${product.price}</p>
        <p>Description:{product.description}</p>
        <button><Link to={`/update/${id}`}>edit</Link></button>
        <button onClick={(e)=>{handleDelete(e,product._id)}}>delete</button>


    </div>
  )
}

export default One
