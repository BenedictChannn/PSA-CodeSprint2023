import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div>
      <div className='headercont'>
        <header className="header">
          <h1>
            Welcome to InterNetWork!
          </h1>
          <h1>
            What would you like to do today? Click on an icon to proceed.
          </h1>
        </header>
      </div>
    
      <div className='icon'>
        <img className='image' src='../../../assets/images/profile.png' alt='' />
        <h1 className='header'>Personal Profile</h1>
        <p className='text'>View and Edit your personal professional profile</p>
      </div>

      <div className='buttoncont'>
        <Link to="/">
          <button className='button'>
            LOGOUT
          </button>
        </Link>
      </div>

    </div>
  )
}

export default Home