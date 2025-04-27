import React from "react";
import logo from "../../assets/logo.jpg"; // your logo
import backgroundImg from "../../assets/dark.avif"; // your background image

function Header() {
    const headerStyle = {
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
    };

    return (
        <div id="header" style={headerStyle}>
            <div className="container">
                <nav>
                    <img src={logo} className="logo" alt="Usman's Logo" />
                    <ul id="sidemenu">
                        <li><a href="#header">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">My Work</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <div className="header-text">
                    <p>Front-End Developer</p>
                    <h1>Hi, I'm <span>Mr.</span> Usman from Sargodha</h1>
                </div>
            </div>
        </div>
    );
}

export default Header;
