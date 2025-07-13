import React from 'react'
import './certificate.css'
import cor1 from './assets/1.jpg'
import cor2 from './assets/2.jpg'
import cor3 from './assets/3.jpg'
import cor4 from './assets/4.jpg'
import cor5 from './assets/5.jpg'
import cor6 from './assets/6.jpg'
import Certificatemain from './Certificatemain'
import { useNavigate } from 'react-router-dom';
import React1, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Certificate() {
    const navigate = useNavigate();
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true
        });
    }, []);

    const [showMore, setShowMore] = useState(false);

    const openMore = () => {
        setShowMore(true);
    };

    const showres1 = () => {
        window.open(cor1, '_blank');
    };
    const showres2 = () => {
        window.open(cor2, '_blank');
    };
    const showres3 = () => {
        window.open(cor3, '_blank');
    };
    const showres4 = () => {
        window.open(cor4, '_blank');
    };
    const showres5 = () => {
        window.open(cor5, '_blank');
    };
    const showres6 = () => {
        window.open(cor6, '_blank');
    };

    return (
        <div className='certificate-container'>
            <h6 data-aos="slide-up" id='cetText'>Badges of Brilliance</h6>
            <h1 >My Achievements</h1>
            <div className='course'>
                {/* course 1 */}
                <div data-aos="slide-up" style={{ width: 295, height: 221.25, position: 'relative' }} id='eff'>
                    <div style={{ width: 295, height: 221.25, left: 0, top: 0, position: 'absolute', background: 'rgba(77.24, 76.49, 76.49, 0.60)', boxShadow: 'inset 0px 0px 8px rgba(219, 219, 219, 0.65)', borderRadius: 14.75, backdropFilter: 'blur(4.36px)' }} />
                    <div style={{ width: 252.96, left: 17.70, top: 101.77, position: 'absolute', textAlign: 'justify', color: '#B3B3B3', fontSize: 11.80, fontFamily: 'Outfit', fontWeight: '400', wordWrap: 'break-word' }}>Gained foundational understanding of AI concepts including machine learning, neural networks, and intelligent systems. Explored real-world applications and ethical implications of AI.</div>
                    <div style={{ width: 263.29, height: 15.49, left: 16.23, top: 28.02, position: 'absolute', color: 'white', fontSize: 14.75, fontFamily: 'Outfit', fontWeight: '600', wordWrap: 'break-word' }}>Introduction  to artificial intelligence (AI)</div>
                    <div style={{ width: 60.47, height: 15.49, left: 16.23, top: 69.32, position: 'absolute', color: 'white', fontSize: 14.75, fontFamily: 'Outfit', fontWeight: '600', wordWrap: 'break-word' }}>coursera</div>
                    <button onClick={showres1} style={{ width: 51.62, height: 22.12, position: 'absolute', left: 122.43, top: 177.74, background: '#D9D9D9', borderRadius: 14.75, border: 'none', fontSize: 11.8, fontFamily: 'Outfit', fontWeight: 400, color: '#0D0C0C', cursor: 'pointer', textAlign: 'center', lineHeight: '22.12px', padding: 0 }}>
                        view
                    </button>

                </div>
                {/* course 2 */}
                <div data-aos="slide-up" style={{ width: 295, height: 221.25, position: 'relative' }} id='eff'>
                    <div style={{ width: 295, height: 221.25, left: 0, top: 0, position: 'absolute', background: 'rgba(77.24, 76.49, 76.49, 0.60)', boxShadow: 'inset 0px 0px 8px rgba(219, 219, 219, 0.65)', borderRadius: 14.75, backdropFilter: 'blur(4.36px)' }} />
                    <button onClick={showres2} style={{ width: 51.62, height: 22.12, position: 'absolute', left: 122.43, top: 177.74, background: '#D9D9D9', borderRadius: 14.75, border: 'none', fontSize: 11.8, fontFamily: 'Outfit', fontWeight: 400, color: '#0D0C0C', cursor: 'pointer', textAlign: 'center', lineHeight: '22.12px', padding: 0 }}>
                        view
                    </button>
                    <div style={{ width: 263, left: 16, top: 96, position: 'absolute', textAlign: 'justify', color: '#B3B3B3', fontSize: 11.80, fontFamily: 'Outfit', fontWeight: '400', wordWrap: 'break-word' }}>Learned how to create dynamic, smooth animations using JavaScript and libraries like GSAP. Gained experience in enhancing UX through transitions, motion effects, and interactive visuals.</div>
                    <div style={{ width: 60.47, height: 15.49, left: 18, top: 66, position: 'absolute', color: 'white', fontSize: 14.75, fontFamily: 'Outfit', fontWeight: '600', wordWrap: 'break-word' }}>coursera</div>
                    <div style={{ width: 268, height: 15, left: 16, top: 25, position: 'absolute', color: 'white', fontSize: 13, fontFamily: 'Outfit', fontWeight: '600', wordWrap: 'break-word' }}>javascript animation for website,Storytelling data visulization and games</div>
                </div>
                {/* course 3 */}
                <div data-aos="slide-up" style={{ width: 295, height: 221.25, position: 'relative' }} id='eff'>
                    <div style={{ width: 295, height: 221.25, left: 0, top: 0, position: 'absolute', background: 'rgba(77.24, 76.49, 76.49, 0.60)', boxShadow: 'inset 0px 0px 8px rgba(219, 219, 219, 0.65)', borderRadius: 14.75, backdropFilter: 'blur(4.36px)' }} />
                    <button onClick={showres3} style={{ width: 51.62, height: 22.12, position: 'absolute', left: 122.43, top: 177.74, background: '#D9D9D9', borderRadius: 14.75, border: 'none', fontSize: 11.8, fontFamily: 'Outfit', fontWeight: 400, color: '#0D0C0C', cursor: 'pointer', textAlign: 'center', lineHeight: '22.12px', padding: 0 }}>
                        view
                    </button>
                    <div style={{ width: 263, left: 16, top: 96, position: 'absolute', textAlign: 'justify', color: '#B3B3B3', fontSize: 11.80, fontFamily: 'Outfit', fontWeight: '400', wordWrap: 'break-word' }}>Created a functional Twitter-like interface using React. Developed core features such as real-time feeds, tweet creation, likes, and UI responsiveness with component-based architecture.</div>
                    <div style={{ width: 60.47, height: 15.49, left: 16, top: 69, position: 'absolute', color: 'white', fontSize: 14.75, fontFamily: 'Outfit', fontWeight: '600', wordWrap: 'break-word' }}>coursera</div>
                    <div style={{ width: 277, height: 15, left: 16, top: 25, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Outfit', fontWeight: '600', wordWrap: 'break-word' }}>Build a Twitter clone front-end  with react</div>
                </div>
                {/* course 4 */}
                <div data-aos="slide-up" style={{ width: 295, height: 221.25, position: 'relative' }} id='eff'>
                    <div style={{ width: 295, height: 221.25, left: 0, top: 0, position: 'absolute', background: 'rgba(77.24, 76.49, 76.49, 0.60)', boxShadow: 'inset 0px 0px 8px rgba(219, 219, 219, 0.65)', borderRadius: 14.75, backdropFilter: 'blur(4.36px)' }} />
                    <button onClick={showres4} style={{ width: 51.62, height: 22.12, position: 'absolute', left: 122.43, top: 177.74, background: '#D9D9D9', borderRadius: 14.75, border: 'none', fontSize: 11.8, fontFamily: 'Outfit', fontWeight: 400, color: '#0D0C0C', cursor: 'pointer', textAlign: 'center', lineHeight: '22.12px', padding: 0 }}>
                        view
                    </button>
                    <div style={{ width: 263, left: 16, top: 81, position: 'absolute', textAlign: 'justify', color: '#B3B3B3', fontSize: 11.80, fontFamily: 'Outfit', fontWeight: '400', wordWrap: 'break-word' }}>Introduced to the fundamentals of Java programming including variables, data types, loops, and object-oriented principles. Built simple applications to understand core syntax and logic.</div>
                    <div style={{ width: 60.47, height: 15.49, left: 16, top: 50, position: 'absolute', color: 'white', fontSize: 14.75, fontFamily: 'Outfit', fontWeight: '600', wordWrap: 'break-word' }}>coursera</div>
                    <div style={{ width: 277, height: 15, left: 16, top: 25, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Outfit', fontWeight: '600', wordWrap: 'break-word' }}>Java for beginners : getting started</div>
                </div>
                {/* course 5 */}
                <div data-aos="slide-up" style={{ width: 295, height: 221.25, position: 'relative' }} id='eff'>
                    <div style={{ width: 295, height: 221.25, left: 0, top: 0, position: 'absolute', background: 'rgba(77.24, 76.49, 76.49, 0.60)', boxShadow: 'inset 0px 0px 8px rgba(219, 219, 219, 0.65)', borderRadius: 14.75, backdropFilter: 'blur(4.36px)' }} />
                    <button onClick={showres5} style={{ width: 51.62, height: 22.12, position: 'absolute', left: 122.43, top: 177.74, background: '#D9D9D9', borderRadius: 14.75, border: 'none', fontSize: 11.8, fontFamily: 'Outfit', fontWeight: 400, color: '#0D0C0C', cursor: 'pointer', textAlign: 'center', lineHeight: '22.12px', padding: 0 }}>
                        view
                    </button>
                    <div style={{ width: 263, left: 16, top: 81, position: 'absolute', textAlign: 'justify', color: '#B3B3B3', fontSize: 11.80, fontFamily: 'Outfit', fontWeight: '400', wordWrap: 'break-word' }}>Gained a foundational understanding of Amazon S3, including how to store, manage, and retrieve data securely. Learned about buckets, objects, permissions, versioning, and static website hosting.</div>
                    <div style={{ width: 60.47, height: 15.49, left: 16, top: 50, position: 'absolute', color: 'white', fontSize: 14.75, fontFamily: 'Outfit', fontWeight: '600', wordWrap: 'break-word' }}>coursera</div>
                    <div style={{ width: 277, height: 15, left: 16, top: 25, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Outfit', fontWeight: '600', wordWrap: 'break-word' }}>AWS S3   Basics </div>
                </div>
                {/* course 6 */}
                <div data-aos="slide-up" style={{ width: 295, height: 221.25, position: 'relative' }} id='eff'>
                    <div style={{ width: 295, height: 221.25, left: 0, top: 0, position: 'absolute', background: 'rgba(77.24, 76.49, 76.49, 0.60)', boxShadow: 'inset 0px 0px 8px rgba(219, 219, 219, 0.65)', borderRadius: 14.75, backdropFilter: 'blur(4.36px)' }} />
                    <button onClick={showres6} style={{ width: 51.62, height: 22.12, position: 'absolute', left: 122.43, top: 177.74, background: '#D9D9D9', borderRadius: 14.75, border: 'none', fontSize: 11.8, fontFamily: 'Outfit', fontWeight: 400, color: '#0D0C0C', cursor: 'pointer', textAlign: 'center', lineHeight: '22.12px', padding: 0 }}>
                        view
                    </button>
                    <div style={{ width: 263, left: 16, top: 96, position: 'absolute', textAlign: 'justify', color: '#B3B3B3', fontSize: 11.80, fontFamily: 'Outfit', fontWeight: '400', wordWrap: 'break-word' }}>Learned how to deploy static websites built with HTML, CSS, and JavaScript using Amazon S3. Configured bucket settings, enabled static hosting, and integrated custom domains for live deployment.</div>
                    <div style={{ width: 60.47, height: 15.49, left: 18, top: 66, position: 'absolute', color: 'white', fontSize: 14.75, fontFamily: 'Outfit', fontWeight: '600', wordWrap: 'break-word' }}>coursera</div>
                    <div style={{ width: 268, height: 15, left: 16, top: 25, position: 'absolute', color: 'white', fontSize: 13, fontFamily: 'Outfit', fontWeight: '600', wordWrap: 'break-word' }}>Hosting a Static website (HTML/CSS/Javascript)in AWS S3</div>
                </div>
                < p data-aos="slide-up" id='more-btn-crt'>More Certificates
                    <div style={{ width: 30, height: 30, background: 'rgba(77, 76, 76, 0.6)', boxShadow: 'inset -1px 1px 4px rgba(219, 219, 219, 0.4)', borderRadius: '50%', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'transform 0.3s ease', position: 'absolute', left: '105%', top: '-10%' }}>
                        <div onClick={() => navigate("/certificate")} style={{ color: 'white', fontSize: 15, fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}>
                            ➜
                        </div>
                    </div>
                </p>


            </div>
        </div>
    )
}

export default Certificate