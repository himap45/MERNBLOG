
import React, { useEffect, useState } from 'react';
import validation from '../../Validation';
import Home from '../home/Home';
import Login from '../login/Login';
import axios from "axios";

import './register.css'

function Register(props) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
   // Storing Form Field Values
   const [formValues, setFormValues] = useState({ username: "", email: "", password: "" });

   // Manage Form Error Values
   const [formErrorValues, setFormErrorValues] = useState({});

   // Flag for Form Submission Status
   const [isSubmit, setIsSubmit] = useState(false); 

   // Manage Field Change
   const handleChange = (event) => {
       // console.log(event.target);
       const { name, value } = event.target; //destructuring
       setFormValues({ ...formValues, [name]: value });
       
       // console.log(formValues);
   }

   // Manage Form Refresh
   const handleSubmit = async (event) => {
       event.preventDefault();
       setFormErrorValues(validation(formValues));
       setIsSubmit(true);
       
   }

   useEffect(() => {
       if (Object.keys(formErrorValues).length === 0 && isSubmit) {
           alert("success");
       }
   }, [formErrorValues]);
   
    return (
        <div className='register'>
           {Object.keys(formErrorValues).length === 0 && isSubmit ? window.location.replace("/login") :(<pre className='pretext'>{JSON.stringify(formValues, undefined, 2)}</pre>) }
            <span className="registerTitle">Register</span>
      <form onSubmit={handleSubmit} className="registerForm" >
        <label>Username</label>
        <input className="registerInput" name="username"type="text" placeholder="Enter your username..."value={formValues.username} onChange={handleChange} />
        < p className='error'>{formErrorValues.username}</p>
        <label>Email</label>
        <input className="registerInput" name="email"type="text" placeholder="Enter your email..."value={formValues.email} onChange={handleChange} />
        < p className='error'>{formErrorValues.email}</p>
        <label>Password</label>
        <input className="registerInput" name="password"type="password" placeholder="Enter your password..."value={formValues.password} onChange={handleChange}/>
       < p className='error'>{formErrorValues.password}</p>
        <button className="registerButton">Register</button>
      </form>
        <button className="registerLoginButton">Login</button>
        </div>
    );
}

export default Register;