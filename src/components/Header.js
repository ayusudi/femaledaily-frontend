import React from 'react'
import logoFD from '../assets/logo.jpg'
import bgmenu from '../assets/bgmenu.png'
import user from '../assets/user.png'
import '../css/header.css'

export default function Header() {
    return (
        <div className="header">
            <div className="top-header">
                <div className="left-top">
                    <img src={bgmenu} alt="menu" className="bg-menu" />
                    <img src={logoFD} alt="logoFD" className="fd-logo" />
                    <input type="text" className="search" />
                </div>
                <div className="login">
                    <div className="login-logo">
                        <img src={user} alt="user" style={{ width: '24px', height: '24px' }} />
                        <h3 style={{ color: 'white' }} className="login-caps">LOGIN / SIGNUP</h3>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="bottom-header">
                <ul className="catagories">
                    <li>SKINCARE</li>
                    <li>MAKE UP</li>
                    <li>HAIR</li>
                    <li>FRAGANCE</li>
                    <li>NAILS</li>
                    <li>TOOLS</li>
                    <li>BRANDS</li>
                </ul>
            </div>
            <hr></hr>
        </div>
    )
}