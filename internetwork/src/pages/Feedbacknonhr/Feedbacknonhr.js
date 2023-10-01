import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Feedbacknonhr.css';
import InputBox from '../../components/InputBox'
import Sidebar from '../../components/Sidebar/Sidebar';



function Feedbacknonhr() {

    const [selectedProject, setSelectedProject] = React.useState(""); // State for selected option
    const [name, setName] = useState('')
    const [feedback, setFeedback] = useState('')
    const navigate = useNavigate()

    const handleProjectChange = (event) => {
        setSelectedProject(event.target.value); // Update selected option when changed
    };

    const handleName = (event) => {
        setName(event.target.value)
    }

    const handleFeedback = (event) => {
        setFeedback(event.target.value)
    }

    const handleSubmit = (e) => {
        navigate('/home')
    }

    return (
        <div className='findcontainer'>
            <div className='last'>
                <div className='logof'>
                    <img src='../../../assets/images/logo.png' alt='' />
                </div>
                <header className="findheader">
                    <h1>
                        Who are you reviewing today?
                    </h1>
                </header>
                <div>
                    <InputBox placeholder="NAME" value={name} setValue={handleName} />
                </div>
                <div>
                    <select
                        value={selectedProject}
                        onChange={handleProjectChange}
                        className='inputf'
                    >
                        <option value="">PROJECT</option>
                        <option value="Project PSA">Project PSA</option>
                        <option value="PSA Project">PSA Project</option>
                    </select>
                </div>
                <div>
                    <InputBox placeholder="FEEDBACK" value={feedback} setValue={handleFeedback} />
                </div>
                <div className='findbuttcont'>
                    <button className='findButton' onClick={handleSubmit}>
                        SUBMIT
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Feedbacknonhr