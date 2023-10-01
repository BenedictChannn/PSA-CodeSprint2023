import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { auth, fetchUserProfile } from '../../data/firebase'
import './Profile.css'

export function Profile() {
    const user = auth.currentUser
    const [userDetails, setUserDetails] = useState(null);



    useEffect(() => {
        async function fetchUserDetails() {
            try {
                const userData = await fetchUserProfile("test");
                setUserDetails(userData);
                console.log(userData);
            } catch (error) {
                console.error(error);
            }
        }

        fetchUserDetails();
    }, []);

    if (!userDetails) {
        return <div className='profileDescription'>Loading...</div>;
    }

    const {
        name,
        jobRole,
        department,
        jobExpectations,
        goals,
        skills,
        priorExp,
        uid
    } = userDetails;
    
        // Now you can use the user details here
    

    return (
        <div className='profileMainContainer'>

            <header className='header'>
                <Link to="/home">
                    <div className='topLeftLogo'>
                    <img src='../../../assets/images/logo.png' alt=''/>
                    </div>
                </Link>
                <h1>View Profile</h1> 
            </header>
            <div className='profileContentContainer'>
                <h3 className='profileHeading'>Name</h3>
                <p className='profileDescription'>{name}</p>

                <h3 className='profileHeading'>Role</h3>
                <p className='profileDescription'>{jobRole}</p>
                <h3 className='profileHeading'>Current Department</h3>
                <p className='profileDescription'>{department}</p>

                <h3 className='profileHeading'>Skills</h3>
                <p className='profileDescription'>{skills}</p>
                
                <h3 className='profileHeading'>Projects</h3>
                <p className='profileDescription'>projects A</p>

                <h3 className='profileHeading'>Prior Experiences</h3>
                <p className='profileDescription'>{priorExp}</p>

            </div>

            <Button text="EDIT PROFILE" href="/edit-profile"></Button>
            

        </div>        
    )
    
}
