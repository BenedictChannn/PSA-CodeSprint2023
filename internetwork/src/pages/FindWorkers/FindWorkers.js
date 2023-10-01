import React from 'react'
import { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import './FindWorkers.css';
import InputBox from '../../components/InputBox'
import Sidebar from '../../components/Sidebar/Sidebar';
import { sendFindRequest } from '../../data/firebase';
import { call } from '../../data/call';



function FindWorkers() {

    const [selectedProject, setSelectedProject] = React.useState(""); // State for selected option
    const [selectedDepartment, setSelectedDepartment] = React.useState(""); // State for selected option
    const [name, setName] = useState('')
    const [skill, setSkill] = useState('')
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()






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
                    <InputBox placeholder="NAME" value={name} setValue={setName} />
                </div>
                <div>
                    <select
                        value={selectedDepartment}
                        onChange={setSelectedDepartment}
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
                        onChange={setSelectedProject}
                        className='inputf'
                    >
                        <option value="">PROJECT</option>
                        <option value="Project PSA">Project PSA</option>
                        <option value="PSA Project">PSA Project</option>
                    </select>
                </div>
                <div>
                    <InputBox placeholder="SKILLS" value={skill} setValue={setSkill} />
                </div>
                <Link to={`/findworkersresults/${name}`}>
                    <div className='findbuttcont'>
                        <button className='findButton'>
                            FIND
                        </button>
                    </div>
                </Link>
                
            </div>
        </div>
    )
}

export default FindWorkers