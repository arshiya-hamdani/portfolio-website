import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../Assets/logo-img.png';
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    };
    window.addEventListener("scroll", changeColor);

    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/">
                <img src={logo} alt="Logo" className="logo" />
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects-my">Projects</a></li>
                <li><a href="#contact-form">Contact</a></li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? <FaTimes size={20} style={{ color: "#fff" }} /> : <FaBars size={20} style={{ color: "#fff" }} />}
            </div>
        </div>
    );
}

export default Navbar;
