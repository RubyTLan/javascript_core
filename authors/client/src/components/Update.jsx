import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {useParams, useNavigate, Link} from 'react-router-dom'

const Update = () => {
    const [name,setName]=useState("");

    const [errors, setErrors] = useState([]);
    const navigate=useNavigate();
    const {id}=useParams()

    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors/"+id)
        .then((response) => {
            setName(response.data.name);
            // setPrice(response.data.price);
            // setDescription(response.data.description);
        })
        .catch((error) => {
            console.log(error);
          })
      },[id])


    const handleSubmit=(e)=>{
      e.preventDefault();
      axios.put(`http://localhost:8000/api/authors/update/${id}`,{name})
      .then((response) => {
        navigate("/")
        })
        .catch(err=>{
          const errorResponse = err.response.data.errors; // Get the errors from err.response.data
          const errorArr = []; // Define a temp error array to push the messages in
          for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
              errorArr.push(errorResponse[key].message)
          }
          // Set Errors
          setErrors(errorArr);
      })
    }
  return (
    <div>
        <Link to={"/"}><p>Home</p></Link>
        <br />
        <p>Edit this author:</p>
        <form onSubmit={handleSubmit}>
        {errors.map((err, index) => <p key={index}>{err}</p>)}
        <div>
            <label >Name:</label>
            <input type="text" onChange={(e)=>{setName(e.target.value)}} />
          </div>
          {/* <div>
            <label >Price:</label>
            <input type="number"  value={price} onChange={(e)=>{setPrice(e.target.value)}} />
          </div>
          <div>
            <label >Description:</label>
            <input type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}}  />
          </div> */}
          <button ><Link to={"/"}>cancel</Link></button>
          <button type="submit">Submit</button>
        </form>

    </div>
  )
}

export default Update
