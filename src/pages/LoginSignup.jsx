import React from 'react'
import "../styles/loginsignup.css"
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your name' />
          <input type="email" placeholder='Enter Email' />
          <input type="password" placeholder='Enter Password' />
        </div>
        <button>Continue</button>
        <p className="login-signup-login">Already have an account ?<span>Login Here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" />
          <p>I agree to the terms and condition</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
