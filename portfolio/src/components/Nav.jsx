import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import './nav.css';
import bg from './assets/ChatGPT Image Jun 17, 2025, 12_41_35 AM.png';
import myImage from './assets/mee.jpg';
import docimg from './assets/docimg.png'
import res from './assets/javith resume.jpg'
import ImageSlider from './ImageSlider';
import Skills from './Skills';
import Certificate from './Certificate';
import Project from './Project';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';




function Nav() {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true
        });
    }, []);
    const itemRefs = useRef([]);


    const showres = () => {
        const res = document.getElementById('resume');
        if (res) {
            window.open(res.src, '_blank');
        }
    };

    return (
        <>
            <div
                className="background"
                style={{
                    backgroundImage: `url(${bg})`,

                }}
            >


                {/* Centered Text Content */}

                <div id='home'>
                    <h1 data-aos="slide-right" id='headtxt'>I help founders turn  ideas<br /> into seamless "<span id='styletxt'>
                        digital experiences </span>"</h1>

                    <div id='subtxt'><p >Hey there! I’m Javith   <img src={myImage} alt="Me" id='subimg' />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I bring ideas to life on the web. </p></div>
                    <button
                        id='connect-btn'
                        onClick={() => navigate("/contact")}

                    ><span>Let's Connect</span><div><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGASURBVHgBzVU9j4JAEB2QRBuNpZWFJiYWlvb8AH+Bhb2FlYmljX/BysRaE2qoKeipKGgIBTR0hAbCxxy7l72Ld3rCniS+hGzBzrx9b2Z2BUSUoUEIJQFCgxChYbwvQZqmUMXd2gQkqeu6MJ/PwbbtSgG1kOc5Xq9XlCQJB4MBmqaJRVE83F+bgJFcLhcURRH7/T7quv5aAobj8UhJOp0OKoryeoIsy6iSdrtNLTudTlTdXYKfP6qC+E/qMBwOURAEPBwONzWRWLF3ux1YlgW86Ha7dN3v99Dr9WCz2UBJ+NlFhFGWZdLU3B85PVsXi8WXAoFZFQQBhGEIPCDx2+0WVFWF0WgEhmFA2cLfCnhBlCdJgqvVinbTeDzGcghv9vyLIIoiagexZTqdoud5v4aOi4AkcRwHJ5MJtlotXC6XGMfx3YmuTUCS+L6Ps9mM2rJer2mLP7ouuBScz2d68rKwT+eH+y7SNK3SXu4nk4XRVvwDEnDiWWKGxp9MokCHBvEBGJIvmllDQSsAAAAASUVORK5CYII=" /></div></button>

                    <button id='res-btn' onClick={showres}>
                        <img src={docimg} alt="" />
                        <span>Resume</span>
                    </button>

                    <img src={res} alt="resume" id='resume' style={{ display: 'none' }} />

                </div>
            </div>

            <div id='about-me'>
                <h6 id='about-sub'>About Me</h6>
                <h1 id='abt-head'>Hi there! I'm
                    <h1 id='txt-grad'>
                        Javith
                    </h1>
                </h1>
                <p id='abt-sub'>I'm a passionate Web & Frontend Developer with a strong eye for clean UI and smooth user experiences. I love turning ideas into interactive, responsive websites that not only look great but work flawlessly. <br /><br />

                    My toolbox includes HTML, CSS, JavaScript, React, and Figma  blending code and design to build digital products people love to use. Whether it’s a sleek landing page or a complete web app, I focus on crafting intuitive and user-focused experiences. <br /><br />

                    When I'm not coding, I’m usually sketching out new UI ideas, exploring design trends, or learning the next cool thing in tech. <br /><br />

                    I believe in design with purpose, code with clarity, and creating with heart. Let’s build something amazing.</p>
                <p id='more-btn'>More About me
                    <div style={{ width: 30, height: 30, background: 'rgba(77, 76, 76, 0.6)', boxShadow: 'inset -1px 1px 4px rgba(219, 219, 219, 0.4)', borderRadius: '50%', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'transform 0.3s ease', position: 'absolute', left: '105%', top: '-10%' }}>
                        <div onClick={() => navigate("/about")} style={{ color: 'white', fontSize: 15, fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}>
                            ➜
                        </div>
                    </div>
                </p>
                <ImageSlider />
            </div>
            <div id='Skill-Cointainer'>
                <Skills />
            </div>
            <div id='certificate'>
                <Certificate />
            </div>
            <div id='Project'>
                <div id='project-back' />
                <Project />

            </div>
            <div id='footer'>
                <Footer />
            </div>

        </>
    );
}

export default Nav;
