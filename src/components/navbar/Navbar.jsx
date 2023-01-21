import React from 'react'
import logo from '../../assets/logo.webp'
import './navbar.css'
import { HashLink } from 'react-router-hash-link'
import { useState } from 'react'

const Navbar = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    return (
    <nav className={colorChange ? 'navbar navbar-active' : 'navbar'}>
        <div className="container">
            <div className="logo">
                <img style={{ width: "100%" }} src={logo} alt="logo" />
            </div>
            <div className="nav-elements">
                <ul>
                    <li>
                        <a href="/#">Home</a>
                    </li>
                    <li>
                        <a href="/#call-for-paper">Call For Paper</a>
                    </li>
                    <li>
                        <a href="/#paper-submission">Paper submission</a>
                    </li>
                    <li>
                        <a href="">About</a></li>
                    <li>
                        <a href="">Committee</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar