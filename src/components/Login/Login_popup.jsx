import React, { useState } from 'react'
import'./Login.css'
import { assets } from '../../assets/Assets'
const Login_popup = ({setShowLogin}) => {
    const [currentState,setcurrentState]=useState("Sign Up")

  return (
    <div className='Loginpopup'>
      <form  className='container'>
        <div className='title'>
          <h2>{currentState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.xb} alt=''/>
        </div>
        <div className='inputs'>
          {currentState==="Login"?<></>:<input type='text' placeholder='Your name' required />}
          <input type='email' placeholder='Your E-mail' required />
          <input type='password' placeholder='Password' required />
        
        <button>{currentState==="Sign Up"?"Create Account":"Login"}</button>
        </div>
        <div className='popupcond'>
          <input type='checkbox' required/>
          <p>By continuting, I agree the terms & privacy policy.</p>
        </div>
        {currentState==="Login"?
        <p>Create a new account? <span onClick={()=>setcurrentState("Sign Up")}>Click here</span></p>:
        <p>Already have an account?<span onClick={()=>setcurrentState("Login")}>Login here</span></p>}
      </form>
    </div>
  )
}

export default Login_popup