import React from 'react'
import "./TeamCard.css"

export default function TeamCard({ member }) {

    const calculateInitials = (name) => {
        console.log(name)
        let initials = ""
        if(name) initials = name;
        initials = initials.split(" ").map((n)=>n[0]).join(" ");
        return initials
    }

  return (
    <div className='card card-1'>
        <div className='intials-circle'>
            {calculateInitials(member.name)}
        </div>
        <div className='name-title'>
            {member.name}
        </div>
        <div className='name-designation'>
            {member.dasignation}
        </div>
    </div>
  )
}
