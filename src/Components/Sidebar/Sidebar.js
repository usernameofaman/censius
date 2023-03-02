import React, { useEffect } from 'react'
import './Sidebar.css'

export default function Sidebar() {


    const [theme, setTheme] = React.useState("light-theme");

    const changeTheme = () => {
        if (theme === "light-theme") {
            setTheme("dark-theme")
        }
        else {
            setTheme("light-theme")
        }
    }

    useEffect(() => {
        document.body.className = theme
    }, [theme])


    return (
        <div className='sidebar'>
            <div className='items-container'>
                <div className='item' style={{ background: "#2563EB", color: "white" }}>
                    <img alt='icon' className='sidebar-icon' src='/images/team.svg' />
                    <div className='sidebar-items-title'>Team Members</div>
                </div>
                <div className='item'>
                    <img alt='icon' className='sidebar-icon' src='/images/product.svg' />
                    <div className='sidebar-items-title'>Products</div>
                </div>
                <div className='item'>
                    <img alt='icon' className='sidebar-icon' src='/images/inbox.svg' />
                    <div className='sidebar-items-title'>Inbox</div>
                </div>
                <div className='item lightmode' onClick={changeTheme}>
                    <img alt='icon' className='sidebar-icon' src='/images/light.svg' />
                    <div className='sidebar-items-title'>{theme === "light-theme" ? "Dark Mode" : "Light Mode"}</div>
                </div>
            </div>
        </div >
    )
}
