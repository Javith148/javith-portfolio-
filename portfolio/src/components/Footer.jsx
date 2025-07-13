import React from 'react'
import back2 from './assets/back2.png'
import './footer.css'
import { Github, Instagram, Mail, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();

    return (

        <div>


            <div style={{ position: 'relative', height: '100vh' }}>

                {/* Gradient Overlay */}
                <div id='overley' >

                    <h1 id='foot-head'>FROM CONCEPT TO <span>CREATION</span></h1>
                    <h1 id='foot-head'>LET's MAKE IT <samp style={{ fontWeight: '700' }}>HAPPEN!</samp> </h1>
                    <button
                        id='connect-btn'
                        onClick={() => navigate("/contact")}
                        style={{ top: '46%', left: '50%' }}
                    >
                        <span>Let's Connect</span><div><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGASURBVHgBzVU9j4JAEB2QRBuNpZWFJiYWlvb8AH+Bhb2FlYmljX/BysRaE2qoKeipKGgIBTR0hAbCxxy7l72Ld3rCniS+hGzBzrx9b2Z2BUSUoUEIJQFCgxChYbwvQZqmUMXd2gQkqeu6MJ/PwbbtSgG1kOc5Xq9XlCQJB4MBmqaJRVE83F+bgJFcLhcURRH7/T7quv5aAobj8UhJOp0OKoryeoIsy6iSdrtNLTudTlTdXYKfP6qC+E/qMBwOURAEPBwONzWRWLF3ux1YlgW86Ha7dN3v99Dr9WCz2UBJ+NlFhFGWZdLU3B85PVsXi8WXAoFZFQQBhGEIPCDx2+0WVFWF0WgEhmFA2cLfCnhBlCdJgqvVinbTeDzGcghv9vyLIIoiagexZTqdoud5v4aOi4AkcRwHJ5MJtlotXC6XGMfx3YmuTUCS+L6Ps9mM2rJer2mLP7ouuBScz2d68rKwT+eH+y7SNK3SXu4nk4XRVvwDEnDiWWKGxp9MokCHBvEBGJIvmllDQSsAAAAASUVORK5CYII=" /></div></button>
                    <p id='foot-head' style={{ color: '#827E7E', width: '400px', fontSize: '18px', position: 'absolute', left: "35%", top: '51%' }}>I thrive on crafting dynamic web applications, and delivering seamless user experiences</p>
                </div>
                <div style={{ width: 290, color: 'white', fontSize: 16, fontWeight: 300, wordWrap: 'break-word', position: 'absolute', transform: 'translateX(20%)', bottom: "10%", zIndex: 1, }}>
                    <p> I'm Javith — a web developer, frontend specialist, and UI/UX enthusiast.<br />Thanks for checking out my site! </p>
                    <p style={{ bottom: "10%", zIndex: 1, }}>© 2025 Javith. Designed & Developed</p>

                    <div style={{ position: 'absolute', transform: 'translateX(20%)', bottom: "5%", left: "150%", fontSize: '16px', fontWeight: 300, width: '100px' }}>General
                        <ul class="nav-links-footer">
                            <li><a href="#headtxt">Home</a></li>
                            <li><a href="#about">About Me</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#certificates">Certificates</a></li>
                            <li><a href="#projects">Projects</a></li>
                        </ul>
                    </div>
                    <div style={{ position: 'absolute', width: '100px', transform: 'translateX(20%)', bottom: "20%", left: "240%", fontSize: '16px', fontWeight: 300 }}>More
                        <ul class="nav-links-footer">
                            <li><a href="#home">Resume</a></li>
                            <li><a href="#about">Beyond Code</a></li>
                            <li><a href="#skills">My Favorites</a></li>
                            <li><a href="#certificates">Inspiration</a></li>

                        </ul>
                    </div>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '30px', bottom: "70%", left: "330%", position: 'absolute' }}>
                        <div className="tooltip">
                            <a href="https://github.com/Javith148" target="_blank" className="social-icon">
                                <Github size={20} />
                            </a>
                            <span className="tooltip-text">GitHub</span>
                        </div>
                        <div className="tooltip">
                            <a href="https://www.instagram.com/_.j.a.v.i._.x148?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="social-icon">
                                <Instagram size={20} />
                            </a>
                            <span className="tooltip-text">Instagram</span>
                        </div>


                        <div className="tooltip">
                            <a href="https://www.linkedin.com/in/javith-sukkur" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <Linkedin size={20} />
                            </a>
                            <span className="tooltip-text">LinkedIn</span>
                        </div>

                    </div>

                </div>
            </div>

        </div >

    )
}

export default Footer