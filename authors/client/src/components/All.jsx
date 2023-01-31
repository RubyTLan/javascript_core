import React, {useEffect,useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

const All = () => {
  const [authors,setAuthors]=useState([]);
  const [deleteToggle,setDeleteToggle]=useState(false)
  useEffect(()=>{
    //calling backend
    axios.get("http://localhost:8000/api/authors")
    .then((response) => {
        setAuthors(response.data);
    })
    .catch((error) => {
        console.log(error);
      })

  },[deleteToggle,authors])

  const handleDelete=(e,id)=>{
    console.log(`delete ${id}`,e)
    axios.delete(`http://localhost:8000/api/authors/delete/${id}`)
    .then((response) => {
        setDeleteToggle(!deleteToggle);
    })
    .catch((error) => {
        console.log(error);
      })

  }

  return (
    <div>
        <Link to={"/new"}><p>Add an author</p></Link>
        <br />
        <p>We have quotes by:</p>
        <table className='table'>
          <thead>
            <tr>
              <th>Author</th>
              <th>Actions Available</th>
            </tr>
          </thead>
          <tbody>
            {
              authors.map((author,i)=>{
                return(
                  <tr key={i}>
                    <td>{author.name}</td>
                    <td>
                    <button ><Link to={`/edit/${author._id}`}>edit</Link></button>
                    <button onClick={(e)=>{handleDelete(e,author._id)}}>delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>

    </div>
  )
}

export default All
