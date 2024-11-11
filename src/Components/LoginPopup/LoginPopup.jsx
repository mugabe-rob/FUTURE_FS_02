import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrState] = useState("Login")
  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>
                {currState}
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </h2>
        </div>
        <div className='login-popup-inputs'>
            {currState==="Login"?<></>:<input type="text" placeholder="Names" required/>}
            
            <input type="email" placeholder="Email" required/>
            <input type="password" placeholder="Password" required/>
            
        </div>
        <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>
            I agree to the Terms and Conditions and Privacy Policy
          </p>
        </div>
        {currState==="Login"
        ?<p>
        Create a new Account?<span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>:
         <p>Already have an account?<span onClick={()=>setCurrState("Sign Up")}>Login</span></p>}
        
         
      
      </form>
    </div>
  )
}

export default LoginPopup
