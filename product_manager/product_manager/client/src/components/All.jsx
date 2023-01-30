import React, {useEffect,useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

const All = () => {
  const [products,setProducts]=useState([]);
  const [deleteToggle,setDeleteToggle]=useState(false)
  useEffect(()=>{
    //calling backend
    axios.get("http://localhost:8000/api/products")
    .then((response) => {
        setProducts(response.data);
    })
    .catch((error) => {
        console.log(error);
      })

  },[deleteToggle,products])

  const handleDelete=(e,id)=>{
    console.log(`delete ${id}`,e)
    axios.delete(`http://localhost:8000/api/products/delete/${id}`)
    .then((response) => {
        setDeleteToggle(!deleteToggle);
    })
    .catch((error) => {
        console.log(error);
      })

  }

  return (
    <div>
        <h1>All products: </h1>
        <ul className="listItems">
          {
            products.map((product,i)=>{
              return(
                <li key={i}>
                  <Link to={`/one/${product._id}`}>{product.title}</Link>
                  <button onClick={(e)=>{handleDelete(e,product._id)}}>delete</button>
                  <button ><Link to={`/update/${product._id}`}>edit</Link></button>
                </li>
              )
            })
          }
        </ul>
    </div>
  )
}

export default All
