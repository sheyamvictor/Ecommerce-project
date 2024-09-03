import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from "axios"

function Register() {

const [data,setData] = useState({
    name: '',
    email:'',
    password:'',
})

const navigate=useNavigate()

const registerUser =async(e)=>{
    e.preventDefault()
 const res= await axios.post('http://localhost:5001/register',data)
 if(res){
  navigate('/')
 }else{
  alert(res)
 }
}

  return (
    <div className='reg'>
        <div className='reg-card'>
        <form onSubmit={registerUser}>
            <label>Name</label>
            <input type='text' placeholder='enter name' value={data.name} onChange={(e)=>setData({...data,name:e.target.value})}/>
            <label>Email</label>
            <input type='email' placeholder='enter mail id'value={data.email} onChange={(e)=>setData({...data,email:e.target.value})} />
            <label>Password</label>
            <input type='password' placeholder=' enter password'value={data.password} onChange={(e)=>setData({...data,password:e.target.value})} />
            <button type='submit'>SignUp</button>
            <p>All ready You have an account?<Link style={{textDecoration:"underline"}} to={'/'}>Login</Link></p>
        </form>
    </div> 
    </div>
  )
}

export default Register