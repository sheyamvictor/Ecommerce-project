import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import axios from 'axios'
function LoginSignup() {

  const [data, setData] = useState({
    email: '',
    password: '',

  })
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();


    const response = await axios.post("http://localhost:5000/login", data);



    if (response.status === 200) {
      alert(response.data.message);

      navigate("/home")
      localStorage.setItem('token', response.data.data.token);
    }
  };

  return (
    <div className='log'>
      <div className='log-card'>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input type='email' placeholder='enter mail id' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
          <label>Password</label>
          <input type='password' placeholder=' enter password' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
          <button type='submit'>Login</button>
          <p>Don't have an account ? <Link style={{ textDecoration: "underline" }} to={'/signUp'}>SignUp</Link>  here</p>
        </form>
      </div>
    </div>
  )
}

export default LoginSignup