
import React from 'react';
import fyp from "../../assets/fyp.PNG"; 
import weather from "../../assets/weaterapp.PNG"; // your logo
import gray from "../../assets/gray.PNG"; // your logo
function Portfolio() {
    return (
        <div id="portfolio">
            <div className="container">
                <h1 className="sub-title">My Work</h1>
                <div className="work-list">
                    <div className="work">
                        <img src={fyp} alt="Final Year Project" />
                        <div className="layer">
                            <h3>Final Year Project</h3>
                            <p>Welcome to the AI-Based Knee MRI ACL Injury Detection System.</p>
                            <a href="https://acl-detection.vercel.app" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={weather} alt="Weather App" />
                        <div className="layer">
                            <h3>Weather App</h3>
                            <p>Weather App using API.</p>
                            <a href="https://weatther-app-psi.vercel.app" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={gray} alt="GrayPak" />
                        <div className="layer">
                            <h3>Gray Pak</h3>
                            <p>E-commerce Website.</p>
                            <a href="https://graypak.netlify.app" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;