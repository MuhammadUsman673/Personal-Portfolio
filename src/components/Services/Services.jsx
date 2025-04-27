import React from "react";

function Services() {
    return (
        <div id="services">
            <div className="container">
                <h1 className="sub-title">My Services</h1>
                <div className="services-list">
                    <div>
                        <i className="fa-solid fa-code"></i>
                        <h2>HTML & CSS</h2>
                        <p>Proficient in building structured, semantic web pages using HTML and styling them with CSS...</p>
                    </div>
                    <div>
                        <i className="fa-solid fa-crop"></i>
                        <h2>JavaScript</h2>
                        <p>Strong knowledge of JavaScript, including DOM manipulation, event handling, and ES6+ features...</p>
                    </div>
                    <div>
                        <i className="fa-brands fa-app-store"></i>
                        <h2>React</h2>
                        <p>Familiar with React and building dynamic, component-based user interfaces...</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;