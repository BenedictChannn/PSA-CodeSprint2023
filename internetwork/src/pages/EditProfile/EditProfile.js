import React, { useEffect, useState } from 'react'
import './EditProfile.css'
import InputBox from '../../components/InputBox'
import { Button } from '../../components/Button'
import { auth, fetchUserProfile, editProfileDetails } from '../../data/firebase'
import { Link } from 'react-router-dom'



export default function EditProfile() {
    //const user = auth.currentUser;
    const user = auth.currentUser.uid;
    const [userDetails, setUserDetails] = useState(null);

    const [userName, setUserName] = useState('')
    const [userRole, setUserRole] = useState('')
    const [userDept, setUserDept] = useState('')
    const [userSkills, setUserSkills] = useState('')
    const [userPriorExp, setUserPriorExp] = useState('')

    useEffect(() => {
      async function fetchUserDetails() {
          try {
              const userData = await fetchUserProfile(user);
              setUserDetails(userData);
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
} = userDetails;



    function editProfile(uid) {
      const userDetails = {
        name: userName === "" ? name : userName,
        jobRole: userRole === "" ? jobRole : userRole,
        department: userDept === "" ? department : userDept,
        skills: userSkills === "" ? skills : userSkills,
        priorExp: userPriorExp === "" ? priorExp : userPriorExp,
        uid: uid
      };
      editProfileDetails(userDetails, uid)
  

    }

    function handleSkillsChange(event) {
      setUserSkills(event.target.value.split(","))
      
    }

    function handlePriorExpChange(event) {
      setUserPriorExp(event.target.value.split(","))
    }

  return (

    <div className='profileMainContainer'>

    <header className='header'>
              <Link to="/home">
                <div className='topLeftLogo'>
                    <img src='../../../assets/images/logo.png' alt=''/>
                </div>
              </Link>
                
                <h1>Edit Profile</h1> 
            </header>
        <div className='editProfileContentContainer'>
            <h3 className='profileHeading'>Name</h3>
            <InputBox className='profileDescription' value={userName} setValue={setUserName} placeholder={name}/>
            <h3 className='profileHeading'>Role</h3>
            <InputBox className='profileDescription' value={userRole} setValue={setUserRole} placeholder={jobRole}/>
            <h3 className='profileHeading'>Current Department</h3>
            <InputBox className='profileDescription' value={userDept} setValue={setUserDept} placeholder={department}/>
            <h3 className='profileHeading'>Skills</h3>
            <div className="container">
              <input className="input" type="text" placeholder={skills} onChange={handleSkillsChange} value={userSkills}>
              </input>
            </div>            
            <div className="container">
              <input className="input" type="text" placeholder={userPriorExp} onChange={handlePriorExpChange} value={priorExp}>
              </input>
            </div>            
            <h3 className='profileHeading'>Prior Experiences</h3>
            <InputBox className='profileDescription'value={userPriorExp} setValue={setUserPriorExp} placeholder={priorExp}/>

        </div>

        <Button text="EDIT PROFILE" href="/profile" onClick={() => {
            console.log("Button clicked"); // Add this line for debugging
            editProfile(user);
        }}></Button>
    </div>
    
  )
}
