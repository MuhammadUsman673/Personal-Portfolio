import { useState } from 'react';
import React from 'react';
import usman from "../../assets/muhammad.jpg"; // your logo


function About() {
    const [activeTab, setActiveTab] = useState('skills');

    const openTab = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="about-colm-1">
                        <img src={usman} alt="Usman's Profile Photo" />
                    </div>
                    <div className="about-colm-2">
                        <h1 className="sub-title">About Me</h1>
                        <p>Hi, I'm Muhammad Usman, a passionate web developer with expertise in HTML, CSS, JavaScript, and React. I love building clean, responsive, and user-friendly websites that solve real-world problems...</p>

                        <div className="tab-titles">
                            <p className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`} onClick={() => openTab('skills')}>Skills</p>
                            <p className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`} onClick={() => openTab('experience')}>Experience</p>
                            <p className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`} onClick={() => openTab('education')}>Education</p>
                        </div>

                        <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
                            <ul>
                                <li><span>HTML & CSS</span><br />Designing Web/App Interfaces.</li>
                                <li><span>JavaScript</span><br />Web App Development.</li>
                                <li><span>React</span><br />Component-Based.</li>
                            </ul>
                        </div>

                        <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`} id="experience">
                            <ul>
                                <li><span>2022-2023</span><br />Personal Web Projects.</li>
                                <li><span>2023</span><br />Calculator App.</li>
                                <li><span>2024</span><br />Weather App.</li>
                            </ul>
                        </div>

                        <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
                            <ul>
                                <li><span>2017-2019</span><br />Matriculation from Govt A.I Model High School Bhera.</li>
                                <li><span>2019-2021</span><br />F.S.C Pre-Engineering from Superior College Bhera.</li>
                                <li><span>2021-2025</span><br />Student of 8th Semester in UOS.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;