import React from 'react'
import './CSS/login.css'

const LoginSignUp = () => {
  return (
    <div className='login w-100 vh-80 py-5'>
      <div className="login-container bg-light m-auto py-2 px-5 text-start">
        <h1 className='my-3'>Sign Up</h1>
        <div className="login-fields d-flex flex-column gap-3 mt-3">
          <input className='w-100 ps-3' type="text" placeholder='Name' />
          <input className='w-100 ps-3' type="email" placeholder='Email Address' />
          <input className='w-100 ps-3' type="password" placeholder='Password' />
        </div>
        <button className='btn w-100 d-flex justify-content-center align-items-center text-light px-4 py-2 mt-3 fs-5 fw-medium'>Continue</button>
        <p className="login-signin mt-3 fs-6 fw-normal text-start">
          Already have an account?<span className='fw-medium'> Login Here</span>
        </p>
        <div className="login-agree text-start d-flex align-items-center gap-2 fw-normal">
          <input type="checkbox"  name='' id='' />
          <p className='term-text'>By Continuing, I agree to the terms of use and privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp
