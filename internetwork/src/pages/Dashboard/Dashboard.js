import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import BlackDash from '../../components/BlackDash/BlackDash'
import YellowDash from '../../components/YellowDash/YellowDash'
import './Dashboard.css';


function Dashboard() {
    return (
        <div>
            <div>
                <Sidebar page="dash" />
            </div>
            <div className='dashcontent'>
                <div className='dashheader'>
                    <h1>Dashboard</h1>
                </div>
                <div className='blackbox'>
                    <BlackDash value="12000" field="EMPLOYEES" />
                    <BlackDash value="12" field="LEAVES" />
                    <BlackDash value="4" field="ONGOING PROJECTS" />
                </div>
                <div className='blackbox'>
                    <YellowDash value="1" field="PENDING LEAVE APPLICATION" />
                    <YellowDash value="1" field="PENDING TRANSFER APPLICATION" />
                    <YellowDash value="2" field="UPCOMING PROJECT" />
                </div>
                <div className='bottom'>
                    <div className='projectons'>
                        <h1 className='yprojtext'>CURRENT ONGOING PROJECTS</h1>
                        <h1 className='yprojtext'>TITLE              START DATE          END DATE</h1>
                        <h1 className='projtext'>PROJECT 1          29 SEP 2023         1 OCT 2023</h1>
                        <h1 className='projtext'>PROJECT 2           4 FEB 2023         8 DEC 2023</h1>
                        <h1 className='projtext'>PROJECT 3          13 AUG 2023        30 NOV 2023</h1>
                    </div>
                    <div>
                        <img className='chart' src='../../../assets/images/graph.png' alt='' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard