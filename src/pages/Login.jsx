import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/login.css'

import stylish_closet_logo from '../assets/images/stylish_closet_logo.png'
import mail_icon from '../assets/images/mail_icon.png'
import password_icon from '../assets/images/password_icon.png'

function Login() {
  return (
    <>
      <div className='login-card'>
        <div className='login-card-head'>
          <Link to="/"><img src={stylish_closet_logo} /></Link>
          <h1>Login</h1>
          <div>Please login to use platform</div>
        </div>

        <form className="login-card-form" onSubmit="return login()">
          <div className="form-item">
            <img className="form-item-icon" src={mail_icon} />
            <span className="form-item-icon material-symbols-rounded"></span>
            <input type="text" id="username" placeholder="Enter Email" required autoFocus />
          </div>
          <div className="form-item">
            <img className="form-item-icon" src={password_icon} />
            <input type="password" id="password" placeholder="Enter Password" required />
          </div>
          <div className="form-item-other">
            <div className="checkbox">
              <input type="checkbox" id="rememberMecheckbox" />
              <label htmlFor="rememberMecheckbox">Remember me</label>
            </div>
            <a href="#">Forgot my password!</a>
          </div>
          <button type="submit">login</button>
        </form>

        <div className="login-card-footer">
          Dont have an account? <a href="#">Create an account</a>
        </div>
      </div>

      <div className='credit'>
        <div>Other Log-in Platform</div>
        <div className="credit-contact">
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
            </svg>
          </a>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-google" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8"></path>
            </svg>
          </a>
        </div>
      </div>
    </>
  )
}

export default Login