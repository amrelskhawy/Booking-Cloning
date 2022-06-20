import React from 'react'
import './navbar.scss'

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navContainer">
                <span className="logo">lamabooking</span>
                <div className="navItems">
                    <button className='navButton'>Register</button>
                    <button className='navButton'>Sign in</button>
                </div>
            </div>
        </nav>
    )
}
