import React from 'react'
import './Landing.css'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className='body'>
      <div className='logo'>
        <img src='../../../assets/images/logo.png' alt='' />
      </div>

      <header className="header">
        <h1>
          Your one-stop platform for
          talent management
        </h1>
      </header>

      <div className="text">
        <p>
          Drive retention, guide skills development, and
          promote from within us
        </p>
      </div>

      <div className='buttoncont'>
        <Link to="/login">
          <button className='button'>
            LOGIN
          </button>
        </Link>
      </div>

      <div className='image'>
        <img src='../../../assets/images/homepage1.png' alt='' />
      </div>
    </div>
  )
}

export default Landing