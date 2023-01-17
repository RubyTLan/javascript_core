import React, {useState} from 'react'

const  Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // let [formData, setFormData] = useState({})

    let formData = {firstName, lastName, email, password, confirmPassword};


    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     let formData = {firstName, lastName, email, password, confirmPassword};
    //     setFormData(formData);
    // }

  return (
    <div>
    <form>
        <div className='form-group'>
            <label>First Name:</label>
            <input onChange={(e) => setFirstName(e.target.value) } type="text" className='form-control'/>
            {
                firstName.length < 2 && firstName.length > 0 ? <p className='text-danger'> Field must be at least 2 characters.</p> : ""
            }
        </div>
        <div className='form-group'>
            <label>Last Name:</label>
            <input onChange={(e) => setLastName(e.target.value) } type="text" className='form-control'/>
            {
                lastName.length < 2 && lastName.length > 0 ? <p className='text-danger'>Field must be at least 2 characters.</p> : ""
            }
        </div>

        <div className='form-group'>
            <label>Email:</label>
            <input onChange={(e) => setEmail(e.target.value) } type="text" className='form-control'/>
            {
                email.length < 5 && email.length > 0 ? <p className='text-danger'>Field must be at least 5 characters.</p> : ""
            }
        </div>

        <div className='form-group'>
            <label>Password:</label>
            <input onChange={(e) => setPassword(e.target.value) } type="password" className='form-control'/>
            {
                password.length < 8 && password.length > 0 ? <p className='text-danger'>Field must be at least 8 characters.</p> : ""
            }
        </div>
        <div className='form-group'>
            <label>Confirm Password:</label>
            <input onChange={(e) => setConfirmPassword(e.target.value) } type="password" className='form-control'/>
            {
                formData.password===formData.confirmPassword ? "": <p className='text-danger'>The passwords must match.</p>
            }
        </div>


    </form>

                    <div >
                    <h2>Your form data</h2>
                    <h3>First name:{formData.firstName}</h3>
                    <h3>Last name:{formData.lastName}</h3>
                    <h3>Email:{formData.email}</h3>
                    <h3>Password:{formData.password.length>=8 ? "password":""}</h3>
                    <h3>Confirm password:{formData.confirmPassword==formData.password &&formData.confirmPassword.length>0 ?"password":""}</h3>
                    </div>


    </div>
  )
}

export default Form
