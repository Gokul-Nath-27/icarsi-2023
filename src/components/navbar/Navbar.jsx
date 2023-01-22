import React from "react";
import logo from "../../assets/logo.webp";
import "./navbar.css";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { CgClose } from "react-icons/cg";
const Navbar = () => {
    const [colorChange, setColorchange] = useState(false)
    const [mobnavOpen, setMobilenavOpen] = useState(false)
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
    };
    window.addEventListener("scroll", changeNavbarColor);
    const setNavHeight = () => {
        const nav = document.querySelector("#navbar")
        const root = document.querySelector(":root")
        root.style.setProperty('--navHeight', `${nav.clientHeight}px`)
    }
    window.addEventListener('resize', setNavHeight)
    return (
        <nav id="navbar" className={colorChange ? "navbar navbar-active" : "navbar"}>
            <div className="container">
                <div className="logo">
                    <img style={{ width: "100%" }} src={logo} alt="logo" />
                </div>
                <div className="nav-elements">
                    <ul className={mobnavOpen ? "active" : ""}>
                        <li>
                            <HashLink
                                to="#"
                                onClick={() => setMobilenavOpen(!mobnavOpen)}
                                className="active"
                                >
                                Home
                            </HashLink>
                        </li>
                        <li>
                            <HashLink
                                to="#call-for-paper"
                                onClick={() => setMobilenavOpen(!mobnavOpen)}
                                >Call For Paper</HashLink>
                        </li>
                        <li>
                            <HashLink
                                to="#paper-submission"
                                onClick={() => setMobilenavOpen(!mobnavOpen)}
                                >Paper Submission</HashLink>
                        </li>
                        <li>
                            <HashLink
                                to="#about"
                                onClick={() => setMobilenavOpen(!mobnavOpen)}
                            >About</HashLink>
                        </li>
                        <li>
                            <HashLink
                                to="#committee"
                                onClick={() => setMobilenavOpen(!mobnavOpen)}
                            >Committee</HashLink>
                        </li>
                        <li>
                            <HashLink
                                to="#contact"
                                onClick={() => setMobilenavOpen(!mobnavOpen)}
                            >Contact</HashLink>
                        </li>
                    </ul>
                </div>
                <div
                    id="mobile"
                    onClick={() => setMobilenavOpen(!mobnavOpen)}>
                    {mobnavOpen ? <CgClose /> : <CgMenuRight />}
                </div>
            </div>
        </nav>
        
    );
};

export default Navbar;
