import React,{useState} from 'react';
import axios from 'axios';
import {useNavigate,Link} from 'react-router-dom';

const Create = () => {
  const [name,setName]=useState("");
  // const [price,setPrice]=useState("");
  // const [description,setDescription]=useState("");

  const [errors, setErrors] = useState([]);
  const navigate=useNavigate();


  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post(`http://localhost:8000/api/authors/create`,{name})
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
        <p>Add a new author:</p>
        <form onSubmit={handleSubmit}>
        {errors.map((err, index) => <p key={index}>{err}</p>)}
          <div>
            <label >Name:</label>
            <input type="text" onChange={(e)=>{setName(e.target.value)}} />
          </div>
          {/* <div>
            <label >Price:</label>
            <input type="number"  onChange={(e)=>{setPrice(e.target.value)}} />
          </div>
          <div>
            <label >Description:</label>
            <input type="text" onChange={(e)=>{setDescription(e.target.value)}}  />
          </div> */}
          {/* <div>
            <label >Top100:</label>
            <input type="checkbox" onChange={(e)=>{setTop100(e.target.checked)}}  />
          </div> */}
          <button ><Link to={"/"}>cancel</Link></button>
          <button type="submit">Submit</button>
        </form>

    </div>
  )
}

export default Create
