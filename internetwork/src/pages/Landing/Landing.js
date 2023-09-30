import React from 'react'
import './Landing.css'

function Landing() {
  return (
    <div className='body'>
      <header className="header">
        <h1>
          Your one-stop platform for
        </h1>
        <h1>
          talent management
        </h1>
      </header>

      <div className="text">
        <p>
          Drive retention, guide skills development, and
        </p>
        <p>
          promote from within us
        </p>
      </div>

      <div className='buttoncont'>
        <button className='button'>
          LOGIN
        </button>
      </div>

      <div className='image'>
        <img src='../../../assets/images/homepage.png' />
      </div>
    </div>
  )
}

export default Landing