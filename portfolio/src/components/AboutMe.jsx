
import './AboutMe.css'
import './nav.css'
import './slider.css'
import NavBar from './NavBar'
import ImageSlider from './ImageSlider'
import me from './assets/me.jpg'
import React, { useEffect, useRef, useState } from 'react';
import Footer from './Footer'



function AboutMe() {
    const imgRef = useRef(null);
    const divRef = useRef(null);
    const [scrolledOver, setScrolledOver] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const rotation = window.scrollY / 12;
            if (imgRef.current) {
                imgRef.current.style.transform = `rotate(${rotation}deg)`;
            }

            // Check if scroll div is intersecting image
            if (imgRef.current && divRef.current) {
                const imgTop = imgRef.current.getBoundingClientRect().bottom;
                const imgBottom = imgRef.current.getBoundingClientRect().top;
                const divTop = divRef.current.getBoundingClientRect().bottom;
                const divBottom = divRef.current.getBoundingClientRect().top;

                // If any part of div overlaps image
                const isOverlapping = imgTop > divBottom && imgBottom < divTop;
                setScrolledOver(isOverlapping);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div id='about'>

            <div id='back-about'>
                <NavBar />
                <div id='back-lay'>
                    <div id='abt-cot' >
                        <div style={{ position: 'absolute', top: 120, right: 0 }}> <ImageSlider /></div>
                        <h6 id='about-sub' style={{ position: 'absolute', top: "0%" }}>About Me</h6>
                        <h1 id='abt-head' style={{ position: 'absolute', top: "3%" }}>Hi there! I'm
                            <h1 id='txt-grad'>
                                Javith
                            </h1>
                        </h1>
                        <p id='abt-sub' style={{ position: 'absolute', top: "25%" }}>I'm a passionate Web & Frontend Developer with a strong eye for clean UI and smooth user experiences. I love turning ideas into interactive, responsive websites that not only look great but work flawlessly. <br /><br />

                            My toolbox includes HTML, CSS, JavaScript, React, and Figma  blending code and design to build digital products people love to use. Whether it’s a sleek landing page or a complete web app, I focus on crafting intuitive and user-focused experiences. <br /><br />

                            When I'm not coding, I’m usually sketching out new UI ideas, exploring design trends, or learning the next cool thing in tech. <br /><br />

                            I believe in design with purpose, code with clarity, and creating with heart. Let’s build something amazing.</p>

                    </div>

                </div>
                <div id='more-abt-me'>
                    <h6>More About Me</h6>
                    <div style={{ textAlign: 'center', color: 'white', fontSize: 60, fontFamily: 'Outfit', fontWeight: '400', wordWrap: 'break-word' }}>Beyond the Code</div>
                    <div style={{ width: 918, textAlign: 'center', margin: '0 auto' }}>
                        <span style={{ color: 'white', fontSize: 20, fontFamily: 'Outfit', fontWeight: 400, wordWrap: 'break-word' }}>
                            There's more to being a developer than just writing code — it's about creativity, curiosity, and finding inspiration from everywhere. Here's a glimpse into the passions and habits that fuel my journey as a{' '}
                        </span>
                        <span style={{ fontSize: 20, fontFamily: 'Outfit', fontWeight: 400, wordWrap: 'break-word', background: 'linear-gradient(270deg, rgb(217, 26, 26), rgb(227, 64, 216), rgb(211, 44, 44), rgb(227, 64, 216))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block' }}>
                            frontend and UI/UX developer
                        </span>

                    </div>
                    <div id='scroll-txt'>
                        <div style={{ width: 575, height: 182, position: 'relative', marginTop: '40px' }}>
                            <div style={{ left: 0, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Outfit', fontWeight: '400', wordWrap: 'break-word' }}>🎨 Creative at Heart</div>
                            <div style={{ width: 575, left: 0, top: 57, position: 'absolute', textAlign: 'justify', color: 'white', fontSize: 20, fontFamily: 'Outfit', fontWeight: '400', wordWrap: 'break-word' }}>I love bringing ideas to life visually before a single line of code is written. Whether it’s sketching wireframes on paper or designing sleek UI components in Figma, creativity is always at the core of what I do. Design, to me, isn’t just about how it looks — it’s about how it works.</div>
                        </div>
                        <div style={{ width: 587, height: 154, position: 'relative', marginTop: '40px' }}>
                            <div style={{ left: 0, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Outfit', fontWeight: '400', wordWrap: 'break-word' }}>🎧 Fueled by Music</div>
                            <div style={{ width: 584, left: 3, top: 54, position: 'absolute', textAlign: 'justify', color: 'white', fontSize: 20, fontFamily: 'Outfit', fontWeight: '400', wordWrap: 'break-word' }}>My best work is often accompanied by the rhythm of music. From chill lo-fi beats during deep focus sessions to energizing tracks when pushing deadlines — music keeps my mind sharp and my flow uninterrupted</div>
                        </div>
                        <div style={{ width: 587, height: 133, position: 'relative', marginTop: '40px' }}>
                            <div style={{ left: 0, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Outfit', fontWeight: '400', wordWrap: 'break-word' }}>🌙 Late-Night Dev Flow</div>
                            <div style={{ width: 584, left: 3, top: 58, position: 'absolute', textAlign: 'justify', color: 'white', fontSize: 20, fontFamily: 'Outfit', fontWeight: '400', wordWrap: 'break-word' }}>There’s something magical about building features in the quiet of the night — when everything’s still, and ideas flow effortlessly. It’s my favorite time to get into deep focus and bring concepts to life.</div>
                        </div>
                        <div style={{ width: 584, height: 128, position: 'relative', marginTop: '40px' }}>
                            <div style={{ left: 0, top: 0, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Outfit', fontWeight: '400', wordWrap: 'break-word' }}>🎮 Play = Progress</div>
                            <div style={{ width: 584, left: 0, top: 53, position: 'absolute', textAlign: 'justify', color: 'white', fontSize: 20, fontFamily: 'Outfit', fontWeight: '400', wordWrap: 'break-word' }}>Gaming is more than just fun — it sharpens my problem-solving mindset. Whether it’s strategy, storytelling, or UI in game menus, <br />I find design inspiration in the digital worlds I explore.</div>
                        </div>
                        <div style={{ width: 587, height: 153, position: 'relative', marginTop: '40px' }}>
                            <div style={{ left: 0, top: 0, position: 'absolute', color: 'white', fontSize: 30, fontFamily: 'Outfit', fontWeight: '400', wordWrap: 'break-word' }}>🌐 Passion for the Web</div>
                            <div style={{ width: 584, left: 3, top: 53, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Outfit', fontWeight: '400', wordWrap: 'break-word' }}>There’s something exciting about the web’s endless possibility. I love building things that live online — accessible, responsive, and open to the world. Each project is a chance to contribute something useful and beautiful to the internet.</div>
                        </div>
                    </div>
                </div >
                <div id='scroll'>
                    <img
                        ref={imgRef}
                        src={me}
                        alt="rotating"
                        style={{ width: 80, height: 80, borderRadius: 166 }}
                    />
                    <div />
                </div>
                <div style={{ position: 'absolute', top: '380%' }}>
                    <Footer />
                </div>



            </div>


        </div>
    )
}

export default AboutMe