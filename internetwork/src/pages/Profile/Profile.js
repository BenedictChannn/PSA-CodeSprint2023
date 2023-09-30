import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { auth } from '../../data/firebase'
import './Profile.css'

export function Profile() {
    return (
        <div className='profileMainContainer'>

            <header className='header'>
                <div className='topLeftLogo'>
                    <img src='../../../assets/images/logo.png' alt=''/>
                </div>
                <h1>View Profile</h1> 
            </header>
            <div className='profileContentContainer'>
                <h3 className='profileHeading'>Name</h3>
                <p className='profileDescription'>Joey Lee</p>

                <h3 className='profileHeading'>Current Department</h3>
                <p className='profileDescription'>Unemployed</p>

                <h3 className='profileHeading'>Job Expectation</h3>
                <p className='profileDescription'>gud food</p>

                <h3 className='profileHeading'>Goals</h3>
                <p className='profileDescription'>be a hella good programmer</p>

                <h3 className='profileHeading'>Skills Per Project</h3>
                <p className='profileDescription'>a lot</p>

                <h3 className='profileHeading'>Prior Experiences and Skills</h3>
                <p className='profileDescription'>lol none</p>

            </div>

            <Button text="EDIT PROFILE" href="/edit-profile"></Button>
            

        </div>        
    )
}
