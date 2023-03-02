import React  , { useEffect } from 'react'
import './Sidebar.css'

export default function Sidebar() {


    const [theme , setTheme] = React.useState("light-theme");

    const changeTheme = () => {
        if(theme === "light-theme"){
            setTheme("dark-theme")
        }
        else{
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
                    <img className='sidebar-icon' src='/images/team.svg' />
                    Team Members
                </div>
                <div className='item'>
                    <img className='sidebar-icon' src='/images/product.svg' />
                    Products
                </div>
                <div className='item'>
                    <img className='sidebar-icon' src='/images/inbox.svg' />
                    Inbox
                </div>
                <div className='item lightmode' onClick={changeTheme}>
                    <img className='sidebar-icon' src='/images/light.svg' />
                    {theme === "light-theme" ? "Dark Mode" : "Light Mode"}
                </div>
            </div>
        </div >
    )
}
