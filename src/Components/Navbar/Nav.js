import React from 'react'
import './Nav.css'

export default function Nav({searchMembers}) {
    return (
        <div className='nav-container'>
            <div className='nav-header'>
                Team Members
            </div>
            <div className='search-container'>
                <input onChange={(e) => searchMembers(e.target.value)} placeholder='Search...' className='search-input' />
            </div>

        </div>
    )
}
