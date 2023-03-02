import React from 'react'
import './Home.css'
import TeamCard from './TeamCard'
import Nav from '../Navbar/Nav'

export default function Home() {


  const apiData = [
    {
      name : "Rahul Shah",
      dasignation :"Co Founder" 
    },
    {
      name : "Avni Patil",
      dasignation : "Co Founder"
    },
    {
      name : "Nadir Hashmi",
      dasignation : "Architect"
    },
    {
      name : "Raman V",
      dasignation : "Analyst"
    },
    {
      name : "Manpreet Singh",
      dasignation : "DevOps"
    },
    {
      name : "Meena Thomas",
      dasignation : "Full Stack"
    },
    {
      name : "Khushbu Parikh",
      dasignation : "Data Scientist"
    },
    
  ]

  const [members , setMembers] = React.useState(apiData)

  const searchMembers = (value) => {
    if(value === ""){
      setMembers(apiData)
      return
    }
    let tempMembers = [...apiData]
    let result = tempMembers.filter(o => o.name.includes(value) || o.dasignation.includes(value));
    setMembers(result)
  }

  return (
    <div className='home-container'>
      <Nav searchMembers={searchMembers}/>
        <div className='team-members'>
            {members.map((member) => (
              <TeamCard member={member}/>
            ))}
        </div>
    </div>
  )
}
