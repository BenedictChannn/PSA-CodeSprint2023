import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './FindWorkers.css';
import InputBox from '../../components/InputBox'
import Sidebar from '../../components/Sidebar/Sidebar';



function FindWorkers() {

    const [selectedProject, setSelectedProject] = React.useState(""); // State for selected option
    const [selectedDepartment, setSelectedDepartment] = React.useState(""); // State for selected option
    const [name, setName] = useState('')
    const [skill, setSkill] = useState('')
    const navigate = useNavigate()


    const handleDepartmentChange = (event) => {
        setSelectedDepartment(event.target.value); // Update selected option when changed
    };
    const handleProjectChange = (event) => {
        setSelectedProject(event.target.value); // Update selected option when changed
    };

    const handleName = (event) => {
        setName(event.target.value)
    }

    const handleSkill = (event) => {
        setSkill(event.target.value)
    }

    const handleFind = (e) => {
        navigate('/findworkersresults')
    }

    return (
        <div className='findcontainer'>
            <div>
                <Sidebar page="search"/>
            </div>

            <div>
                <div className='findimage'>
                    <img src='../../../assets/images/findworkers.png' alt='' />
                </div>
            </div>

            <div className='last'>
                <div className='logof'>
                    <img src='../../../assets/images/logo.png' alt='' />
                </div>
                <header className="findheader">
                    <h1>
                        Who are you looking for today?
                    </h1>
                </header>
                <div>
                    <InputBox placeholder="NAME" value={name} setValue={handleName} />
                </div>
                <div>
                    <select
                        value={selectedDepartment}
                        onChange={handleDepartmentChange}
                        className='inputf'
                    >
                        <option value="">DEPARTMENT</option>
                        <option value="Operations">Operations</option>
                        <option value="Infocomm Technology">Infocomm Technology</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Cooperate">Cooperate</option>
                    </select>
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
                    <InputBox placeholder="SKILLS" value={skill} setValue={handleSkill} />
                </div>
                <div className='findbuttcont'>
                    <button className='findButton' onClick={handleFind}>
                        FIND
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FindWorkers