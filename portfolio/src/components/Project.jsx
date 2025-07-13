import React from 'react'
import back2 from './assets/back2.png'
import './project.css'
import pro1 from './assets/pro1.png'
import html from './assets/html.png'
import css from './assets/css.png'
import figma from './assets/figma.png'
import pro2 from './assets/pro (1).png'
import reactimg from './assets/react.png'
import javascript from './assets/javascript.png'
import pro3 from './assets/pro (2).png'
import pro4 from './assets/pro (3).png'
import python from './assets/python.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function Project() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true
        });
    }, []);
    return (
        < > <div id='back'>

            <h1 data-aos="slide-up" className='pro-head' style={{ position: 'relative', top: '3%' }}>Created <span>works</span> </h1>

            {/* pro1 */}
            <div>

                <div data-aos="slide-up" style={{ width: 550, height: 400, position: 'absolute', left: '90px', top: '35%' }}>
                    <div style={{ width: 650, height: 400, left: 0, top: 0, position: 'absolute', background: 'rgba(77, 76, 76, 0.60)', boxShadow: '-4px 2px 4px rgba(219, 219, 219, 0.65) inset', borderRadius: 20, backdropFilter: 'blur(8.58px)' }} />
                    <div style={{ width: 634, height: 384, left: 8, top: 8, position: 'absolute', background: 'linear-gradient(175deg, #EB7B18 0%, #737373 100%)', borderRadius: 20 }} />
                    <div style={{ width: 520, left: 65, top: 30, position: 'absolute', textAlign: 'justify', color: 'white', fontSize: 16, fontFamily: 'Outfit', fontWeight: '500', wordWrap: 'break-word' }}>A spooky-themed restaurant landing page designed for food lovers who crave a unique dining experience.</div>
                    <img src={pro1} alt="project1" style={{ width: 500, height: 260, left: '70px', top: '110px', position: 'absolute', borderRadius: 10, objectFit: 'cover' }} />
                </div>

                <div id="lanBtn" style={{ display: 'flex' }}>
                    <h1 style={{ position: 'absolute', left: '65%', top: '35%', textAlign: 'justify', color: 'white', fontSize: 36, fontFamily: 'Outfit', fontWeight: '500', wordWrap: 'break-word' }}>Curryard</h1>
                    <p style={{ width: '350px', color: '#B3B3B3', textAlign: 'justify', position: 'absolute', left: '65%', top: '45%' }}>Curryard is a creatively themed restaurant website built to attract food enthusiasts with a taste for adventure. It blends bold visuals, Halloween-inspired branding, and engaging UI elements to create a unique dining atmosphere online. From eye-catching menus to seamless reservation flow, every detail is crafted to reflect the eerie-yet-enticing vibe of the brand</p>


                    <div data-aos="slide-up" style={{ display: 'flex', gap: 10, position: 'absolute', left: '65%', top: '75%' }}>
                        <div style={{ width: 97, height: 33, position: 'relative' }}>
                            <div style={{ width: 92, height: 33, left: 0, top: 0, position: 'absolute', background: 'rgba(77.24, 76.49, 76.49, 0.60)', boxShadow: '-1px 1px 4px rgba(219.45, 219.45, 219.45, 0.65) inset', borderRadius: 10, backdropFilter: 'blur(8.58px)' }} />
                            <img style={{ width: 20, height: 20, left: 11, top: 8, position: 'absolute' }} src={html} alt="HTML" />
                            <div style={{ width: 62, height: 23, left: 35, top: 6, position: 'absolute', textAlign: 'justify', color: 'white', fontSize: 16, fontFamily: 'Outfit', fontWeight: '500', wordWrap: 'break-word' }}>HTML</div>
                        </div>

                        <div style={{ width: 80, height: 33, position: 'relative' }}>
                            <div style={{ width: 75, height: 33, left: 0, top: 0, position: 'absolute', background: 'rgba(77.24, 76.49, 76.49, 0.60)', boxShadow: '-1px 1px 4px rgba(219.45, 219.45, 219.45, 0.65) inset', borderRadius: 10, backdropFilter: 'blur(8.58px)' }} />
                            <img style={{ width: 20, height: 20, left: 10, top: 8, position: 'absolute' }} src={css} alt="CSS" />
                            <div style={{ width: 62, height: 23, left: 34, top: 8, position: 'absolute', textAlign: 'justify', color: 'white', fontSize: 16, fontFamily: 'Outfit', fontWeight: '500', wordWrap: 'break-word' }}>CSS</div>
                        </div>

                        <div style={{ width: 92, height: 33, position: 'relative' }}>
                            <div style={{ width: 92, height: 33, left: 0, top: 0, position: 'absolute', background: 'rgba(77.24, 76.49, 76.49, 0.60)', boxShadow: '-1px 1px 4px rgba(219.45, 219.45, 219.45, 0.65) inset', borderRadius: 10, backdropFilter: 'blur(8.58px)' }} />
                            <div style={{ width: 62, height: 23, left: 28, top: 6, position: 'absolute', textAlign: 'justify', color: 'white', fontSize: 16, fontFamily: 'Outfit', fontWeight: '500', wordWrap: 'break-word' }}>Figma</div>
                            <img style={{ width: 20, height: 20, left: 7, top: 7, position: 'absolute' }} src={figma} alt="Figma" />
                        </div>
                    </div>
                </div>
            </div>

            {/* pro2 */}
            <div>

                <div
                    data-aos="slide-up"
                    style={{ width: 550, height: 400, position: 'absolute', left: '90px', top: '120%' }}
                >
                    <div style={{ width: 650, height: 400, left: 0, top: 0, position: 'absolute', background: 'rgba(77, 76, 76, 0.60)', boxShadow: '-4px 2px 4px rgba(219, 219, 219, 0.65) inset', borderRadius: 20, backdropFilter: 'blur(8.58px)' }} />
                    <div style={{ width: 634, height: 384, left: 8, top: 8, position: 'absolute', background: 'linear-gradient(175deg, #7F17DA 0%, #737373 100%)', borderRadius: 20 }} />
                    <div style={{ width: 520, left: 65, top: 30, position: 'absolute', textAlign: 'justify', color: 'white', fontSize: 16, fontFamily: 'Outfit', fontWeight: '500' }}>A clean, responsive portfolio to showcase my skills, projects, and personal brand — built for smooth navigation and modern UI.</div>
                    <img src={pro2} alt="project1" style={{ width: 500, height: 300, left: '70px', top: '80px', position: 'absolute', borderRadius: 10, objectFit: 'cover' }} />
                </div>


                <div id='lanBtn' style={{ display: 'flex' }}>
                    <h1 style={{ position: 'absolute', left: '65%', top: '125%', textAlign: 'justify', color: 'white', fontSize: 36, fontFamily: 'Outfit', fontWeight: '500' }}>Portfolio</h1>

                    <p data-aos-delay="200" style={{ width: '350px', color: '#B3B3B3', textAlign: 'justify', position: 'absolute', left: '65%', top: '135%' }}>
                        This portfolio is a React-powered web application designed to highlight my expertise in frontend development and UI/UX design. Crafted with a sleek, modern layout, it offers a seamless user experience with smooth scrolling, responsive design, and interactive elements. Each section — from About to Projects — is built to reflect clarity, creativity, and personality.                    </p>


                    <div data-aos="slide-up" data-aos-delay="400" style={{ display: 'flex', gap: 10, position: 'absolute', left: '65%', top: '165%' }}>
                        <div style={{ width: 97, height: 33, position: 'relative' }}>
                            <div style={{ width: 92, height: 33, left: 0, top: 0, position: 'absolute', background: 'rgba(77.24, 76.49, 76.49, 0.60)', boxShadow: '-1px 1px 4px rgba(219.45, 219.45, 219.45, 0.65) inset', borderRadius: 10, backdropFilter: 'blur(8.58px)' }} />
                            <img style={{ width: 20, height: 18, left: 11, top: 8, position: 'absolute' }} src={reactimg} />
                            <div style={{ width: 62, height: 23, left: 35, top: 6, position: 'absolute', textAlign: 'justify', color: 'white', fontSize: 16, fontFamily: 'Outfit', fontWeight: '500' }}>React</div>
                        </div>

                        <div style={{ width: 80, height: 33, position: 'relative' }}>
                            <div style={{ width: 75, height: 33, left: 0, top: 0, position: 'absolute', background: 'rgba(77.24, 76.49, 76.49, 0.60)', boxShadow: '-1px 1px 4px rgba(219.45, 219.45, 219.45, 0.65) inset', borderRadius: 10, backdropFilter: 'blur(8.58px)' }} />
                            <img style={{ width: 20, height: 20, left: 10, top: 8, position: 'absolute' }} src={css} />
                            <div style={{ width: 62, height: 23, left: 34, top: 8, position: 'absolute', textAlign: 'justify', color: 'white', fontSize: 16, fontFamily: 'Outfit', fontWeight: '500' }}>CSS</div>
                        </div>

                        <div style={{ width: 92, height: 33, position: 'relative' }}>
                            <div style={{ width: 125, height: 33, left: 0, top: 0, position: 'absolute', background: 'rgba(77.24, 76.49, 76.49, 0.60)', boxShadow: '-1px 1px 4px rgba(219.45, 219.45, 219.45, 0.65) inset', borderRadius: 10, backdropFilter: 'blur(8.58px)' }} />
                            <div style={{ width: 62, height: 23, left: 40, top: 6, position: 'absolute', textAlign: 'justify', color: 'white', fontSize: 16, fontFamily: 'Outfit', fontWeight: '500' }}>JavaScript</div>
                            <img style={{ width: 30, height: 30, left: 7, top: 2, position: 'absolute' }} src={javascript} />
                        </div>
                    </div>
                </div>
            </div>

            {/* pro3 */}
            <div>


                <div data-aos="slide-up" style={{ width: 550, height: 400, position: 'absolute', left: '90px', top: '210%' }}>
                    <div style={{ width: 650, height: 400, left: 0, top: 0, position: 'absolute', background: 'rgba(77, 76, 76, 0.60)', boxShadow: '-4px 2px 4px rgba(219, 219, 219, 0.65) inset', borderRadius: 20, backdropFilter: 'blur(8.58px)' }} />
                    <div style={{ width: 634, height: 384, left: 8, top: 8, position: 'absolute', background: ' linear-gradient(175deg, #4851FF 0%, #737373 100%)', borderRadius: 20 }} />
                    <div style={{ width: 520, left: 65, top: 30, position: 'absolute', textAlign: 'justify', color: 'white', fontSize: 16, fontFamily: 'Outfit', fontWeight: '500', wordWrap: 'break-word' }}>A location-based web app built with Flask and Leaflet.js to connect users with nearby certified electricians. Includes real-time booking, secure login</div>
                    <img src={pro3} alt="project1" style={{ width: 600, height: 300, left: '26px', top: '80px', position: 'absolute', borderRadius: 10, objectFit: 'cover' }} />
                </div>


                <div id='lanBtn' style={{ display: 'flex' }}>
                    <h1 style={{ position: 'absolute', left: '65%', top: '215%', textAlign: 'justify', color: 'white', fontSize: 25, fontFamily: 'Outfit', fontWeight: '500', wordWrap: 'break-word' }}>Smart Electrician Booking website </h1>
                    <p style={{ width: '386px', color: '#B3B3B3', textAlign: 'justify', position: 'absolute', left: '65%', top: '223%' }}>This web platform connects users with nearby certified electricians using real-time geolocation powered by Leaflet.js and OpenStreetMap. Developed with Flask, HTML, CSS, and JavaScript, it offers a smooth and responsive user experience. Key features include secure login, a simple booking form, and support for multiple payment methods such as UPI and PayPal. The system also integrates automated email notifications and a MySQL database to ensure seamless booking and data management.</p>
                    <div data-aos="slide-up" style={{ display: 'flex', gap: 10, position: 'absolute', left: '65%', top: '260%' }}>
                        <div style={{ width: 97, height: 33, position: 'relative' }}>
                            <div style={{ width: 92, height: 33, left: 0, top: 0, position: 'absolute', background: 'rgba(77.24, 76.49, 76.49, 0.60)', boxShadow: '-1px 1px 4px rgba(219.45, 219.45, 219.45, 0.65) inset', borderRadius: 10, backdropFilter: 'blur(8.58px)' }} />
                            <img style={{ width: 20, height: 20, left: 11, top: 8, position: 'absolute' }} src={html} />
                            <div style={{ width: 62, height: 23, left: 35, top: 6, position: 'absolute', textAlign: 'justify', color: 'white', fontSize: 16, fontFamily: 'Outfit', fontWeight: '500', wordWrap: 'break-word' }}>HTML</div>
                        </div>

                        <div style={{ width: 80, height: 33, position: 'relative' }}>
                            <div style={{ width: 75, height: 33, left: 0, top: 0, position: 'absolute', background: 'rgba(77.24, 76.49, 76.49, 0.60)', boxShadow: '-1px 1px 4px rgba(219.45, 219.45, 219.45, 0.65) inset', borderRadius: 10, backdropFilter: 'blur(8.58px)' }} />
                            <img style={{ width: 20, height: 20, left: 10, top: 8, position: 'absolute' }} src={css} />
                            <div style={{ width: 62, height: 23, left: 34, top: 8, position: 'absolute', textAlign: 'justify', color: 'white', fontSize: 16, fontFamily: 'Outfit', fontWeight: '500', wordWrap: 'break-word' }}>CSS</div>
                        </div>

                        <div style={{ width: 92, height: 33, position: 'relative' }}>
                            <div style={{ width: 125, height: 33, left: 0, top: 0, position: 'absolute', background: 'rgba(77.24, 76.49, 76.49, 0.60)', boxShadow: '-1px 1px 4px rgba(219.45, 219.45, 219.45, 0.65) inset', borderRadius: 10, backdropFilter: 'blur(8.58px)' }} />
                            <div style={{ width: 62, height: 23, left: 40, top: 6, position: 'absolute', textAlign: 'justify', color: 'white', fontSize: 16, fontFamily: 'Outfit', fontWeight: '500', }}>javascript</div>
                            <img style={{ width: 30, height: 30, left: 7, top: 2, position: 'absolute' }} src={javascript} />
                        </div>
                        <div style={{ width: 97, height: 33, position: 'relative', left: -300, top: 50, }}>
                            <div style={{ width: 100, height: 33, left: 0, top: 0, position: 'absolute', background: 'rgba(77.24, 76.49, 76.49, 0.60)', boxShadow: '-1px 1px 4px rgba(219.45, 219.45, 219.45, 0.65) inset', borderRadius: 10, backdropFilter: 'blur(8.58px)' }} />
                            <img style={{ width: 20, height: 20, left: 11, top: 8, position: 'absolute' }} src={python} />
                            <div style={{ width: 62, height: 23, left: 35, top: 6, position: 'absolute', textAlign: 'justify', color: 'white', fontSize: 16, fontFamily: 'Outfit', fontWeight: '500', wordWrap: 'break-word' }}>Python</div>
                        </div>
                    </div>

                </div>
            </div>
            {/* pro4 */}
            <div>


                <div data-aos="slide-up" style={{ width: 550, height: 400, position: 'absolute', left: '90px', top: '300%' }}>
                    <div style={{ width: 650, height: 400, left: 0, top: 0, position: 'absolute', background: 'rgba(77, 76, 76, 0.60)', boxShadow: '-4px 2px 4px rgba(219, 219, 219, 0.65) inset', borderRadius: 20, backdropFilter: 'blur(8.58px)' }} />
                    <div style={{ width: 634, height: 384, left: 8, top: 8, position: 'absolute', background: 'linear-gradient(175deg, #30B45C 0%, #737373 100%)', borderRadius: 20 }} />
                    <div style={{ width: 520, left: 65, top: 30, position: 'absolute', textAlign: 'justify', color: 'white', fontSize: 16, fontFamily: 'Outfit', fontWeight: '500', wordWrap: 'break-word' }}>Trendy landing page for a T-shirt brand. Clean layout, bold visuals — designed in Figma.</div>
                    <img src={pro4} alt="project1" style={{ width: 500, height: 300, left: '70px', top: '80px', position: 'absolute', borderRadius: 10, objectFit: 'cover' }} />
                </div>


                <div id='lanBtn' style={{ display: 'flex' }}>
                    <h1 style={{ position: 'absolute', left: '65%', top: '305%', textAlign: 'justify', color: 'white', fontSize: 30, fontFamily: 'Outfit', fontWeight: '500', wordWrap: 'break-word' }}>T-Shirt E-Commerce UI Design</h1>
                    <p style={{ width: '350px', color: '#B3B3B3', textAlign: 'justify', position: 'absolute', left: '65%', top: '315%' }}>A clean, modern landing page concept for a custom T-shirt store. Designed in Figma with a focus on strong visuals, intuitive layout, and bold CTAs. This UI/UX-only project showcases a stylish, user-friendly e-commerce interface ready for development.</p>
                    <div data-aos="slide-up" style={{ display: 'flex', gap: 10, position: 'absolute', left: '65%', top: '340%' }}>
                        <div style={{ width: 92, height: 33, position: 'relative' }}>
                            <div style={{ width: 92, height: 33, left: 0, top: 0, position: 'absolute', background: 'rgba(77.24, 76.49, 76.49, 0.60)', boxShadow: '-1px 1px 4px rgba(219.45, 219.45, 219.45, 0.65) inset', borderRadius: 10, backdropFilter: 'blur(8.58px)' }} />
                            <div style={{ width: 62, height: 23, left: 28, top: 6, position: 'absolute', textAlign: 'justify', color: 'white', fontSize: 16, fontFamily: 'Outfit', fontWeight: '500', wordWrap: 'break-word' }}>Figma</div>
                            <img style={{ width: 20, height: 20, left: 7, top: 7, position: 'absolute' }} src={figma} />
                        </div>
                    </div>

                </div>
                {/* < p data-aos="slide-up" id='more-btn-pro'>More Projects
                    <div style={{ width: 30, height: 30, background: 'rgba(77, 76, 76, 0.6)', boxShadow: 'inset -1px 1px 4px rgba(219, 219, 219, 0.4)', borderRadius: '50%', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'transform 0.3s ease', position: 'absolute', left: '105%', top: '-10%' }}>
                        <div style={{ color: 'white', fontSize: 15, fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}>
                            ➜
                        </div>
                    </div>
                </p> */}
            </div>


        </div>
        </>
    )
}

export default Project