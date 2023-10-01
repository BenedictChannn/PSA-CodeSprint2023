import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { call } from '../../data/call'
import './FindWorkersResults.css'

function FindWorkersResults() {
  let { id } = useParams()

  // const results = call(id)
  // const {
  //     name,
  //     topThreeReplacements
  // } = results

  const topThreeReplacements = ["Alice Smith", "Sarah Garcia", "Mia Kim"]

  const usersJson = require('../../data/users.json')
  const nameR = []
  const department = []
  const projects = []
  const skills = []
  const supervisorRating = []


  for(let i = 0; i < 3; i++) {
    for(let j = 0; j < usersJson.length; j++)
      if (topThreeReplacements[i] === usersJson[j]['name']) {
        const currUser = usersJson[j]
        nameR[i] = currUser['name']
        department[i] = currUser['department']
        projects[i] = currUser['projects']
        skills[i] = currUser['skills']
        supervisorRating[i] = currUser['supervisorReviews']
      }
  }



  return (
    <div>
      <div className='resultContainer'>
        <p>Name: {nameR[0]}</p>
        <p>Department: {department[0]}</p>
        <p>Projects: {projects[0].join(", ")}</p>
        <p>Skills: {skills[0].join(", ")}</p>
        <p>Supervisor Rating: {supervisorRating[0]}</p>
      </div>
      <div className='resultContainer'>
        <p>Name: {nameR[1]}</p>
        <p>Department: {department[1]}</p>
        <p>Projects: {projects[1].join(", ")}</p>
        <p>Skills: {skills[1].join(", ")}</p>
        <p>Supervisor Rating: {supervisorRating[1]}</p>
      </div>
      <div className='resultContainer'>
        <p>Name: {nameR[2]}</p>
        <p>Department: {department[2]}</p>
        <p>Projects: {projects[2].join(", ")}</p>
        <p>Skills: {skills[2].join(", ")}</p>
        <p>Supervisor Rating: {supervisorRating[2]}</p>
      </div>
    </div>
  )
}

export default FindWorkersResults