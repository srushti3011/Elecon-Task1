import React, { useState } from "react";
import './SignUp.css'

 const SignUp = () => {
    const [action,setAction] = useState("Sign Up");
  return (
    <div className='container-signup'>
    <div className="header-signup">
        <div className='text'>{action}</div>
    </div>
    <div className='inputs'>
        <div className='input'>
            <input type='text' placeholder="Name"></input>
        </div>
        <div className='input'>
            <input type='email' placeholder="Email Id"></input>
        </div>
        <div className='input'>
            <input type='password' placeholder="Password"></input>
        </div>
        <div className='input'>
            <input type='conform password' placeholder="Confirm Password"></input>
        </div>
    </div>
    <div className='submit-signup'>
        <div className={action==="Sign Up" ? "submit gray" : "submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
    </div>
    </div>  
)
}

export default SignUp