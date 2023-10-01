import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home({ userRole }) {
  // Check if the user is an HR official
  const isHROfficial = userRole === 'HR Official';

  return (
    <div>
      <div className='headercont'>
        <header className="homeheader">
          <h1>
            Welcome to InterNetWork!
          </h1>
          <h1>
            What would you like to do today? Click on an icon to proceed.
          </h1>
        </header>
      </div>

      <div className='homeiconcont'>
        <Link to="/profile" className='link-no-underline'>
          <div className='iconhome'>
            <img className='imagehome' src='../../../assets/images/profile.png' alt='' />
            <h1 className='homeheader2'>Personal Profile</h1>
            <p className='hometext'>View and Edit your personal professional profile</p>
          </div>
        </Link>


        <div className='iconhome'>
          <img className='imagehome' src='../../../assets/images/upskill.png' alt='' />
          <h1 className='homeheader2'>Upskill</h1>
          <p className='hometext'>Boost your skills and knowledge with PSA Institute.</p>
        </div>

          <Link to="/findworkers" className='link-no-underline'>
            <div className='iconhome'>
              <img className='imagehome' src='../../../assets/images/find.png' alt='' />
              <h1 className='homeheader2'>Review Employees</h1>
              <p className='hometext'>Rate and give feedback to your fellow employees.</p>
            </div>
          </Link>
      </div>

      <div className='homebuttoncont'>
        <Link to="/">
          <button className='buttonhome'>
            LOGOUT
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
