
import './certificate.css'
import cor1 from './assets/1.jpg'
import cor2 from './assets/2.jpg'
import cor3 from './assets/3.jpg'
import cor4 from './assets/4.jpg'
import cor5 from './assets/5.jpg'
import cor6 from './assets/6.jpg'
import cor7 from './assets/7.jpg'
import cor8 from './assets/8.jpg'
import cor9 from './assets/9.jpg'
import cor10 from './assets/10.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Footer from './Footer'


function Certificatemain() {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true
        });
    }, []);

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
    const showres7 = () => {
        window.open(cor7, '_blank');
    };
    const showres8 = () => {
        window.open(cor8, '_blank');
    };
    const showres9 = () => {
        window.open(cor9, '_blank');
    };
    const showres10 = () => {
        window.open(cor10, '_blank');
    };

    return (
        <div className='certificate-container'id='certificates' style={{ height: '2500px' }}>
            <h6 data-aos="slide-up" id='cetText'>Badges of Brilliance</h6>
            <h1 data-aos="slide-up">My Achievements</h1>
            <div className='course' style={{ position: 'absolute', top: 300 }}>
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
                {/* course 7 */}
                <div data-aos="slide-up" style={{ width: 295, height: 221.25, position: 'relative' }} id='eff'>
                    <div style={{ width: 295, height: 221.25, left: 0, top: 0, position: 'absolute', background: 'rgba(77.24, 76.49, 76.49, 0.60)', boxShadow: 'inset 0px 0px 8px rgba(219, 219, 219, 0.65)', borderRadius: 14.75, backdropFilter: 'blur(4.36px)' }} />
                    <button onClick={showres7} style={{ width: 51.62, height: 22.12, position: 'absolute', left: 122.43, top: 177.74, background: '#D9D9D9', borderRadius: 14.75, border: 'none', fontSize: 11.8, fontFamily: 'Outfit', fontWeight: 400, color: '#0D0C0C', cursor: 'pointer', textAlign: 'center', lineHeight: '22.12px', padding: 0 }}>
                        view
                    </button>
                    <div style={{ width: 263, left: 16, top: 90, position: 'absolute', textAlign: 'justify', color: '#B3B3B3', fontSize: 11.80, fontFamily: 'Outfit', fontWeight: '400', wordWrap: 'break-word' }}>Completed a hands-on cybersecurity workshop focused on foundational security principles and real-world threat prevention. Gained awareness of security best practices, vulnerabilities, and risk mitigation techniques.</div>
                    <div style={{ width: 265, height: 15, left: 16, top: 48, position: 'absolute', color: 'white', fontSize: 14.75, fontFamily: 'Outfit', fontWeight: '600', wordWrap: 'break-word' }}>Organizer: Novitech R&D Private Limited</div>
                    <div style={{ width: 277, height: 15, left: 16, top: 25, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Outfit', fontWeight: '600', wordWrap: 'break-word' }}>Cybersecurity Workshop</div>
                </div>
                {/* course 8 */}
                <div data-aos="slide-up" style={{ width: 295, height: 221.25, position: 'relative' }} id='eff'>
                    <div style={{ width: 295, height: 221.25, left: 0, top: 0, position: 'absolute', background: 'rgba(77.24, 76.49, 76.49, 0.60)', boxShadow: 'inset 0px 0px 8px rgba(219, 219, 219, 0.65)', borderRadius: 14.75, backdropFilter: 'blur(4.36px)' }} />
                    <button onClick={showres8} style={{ width: 51.62, height: 22.12, position: 'absolute', left: 122.43, top: 177.74, background: '#D9D9D9', borderRadius: 14.75, border: 'none', fontSize: 11.8, fontFamily: 'Outfit', fontWeight: 400, color: '#0D0C0C', cursor: 'pointer', textAlign: 'center', lineHeight: '22.12px', padding: 0 }}>
                        view
                    </button>
                    <div style={{ width: 263, left: 16, top: 81, position: 'absolute', textAlign: 'justify', color: '#B3B3B3', fontSize: 11.80, fontFamily: 'Outfit', fontWeight: '400', wordWrap: 'break-word' }}>Earned foundational certification in Oracle Cloud Infrastructure (OCI), covering core cloud concepts, networking, storage, compute, databases, and OCI services. This certification validates a strong understanding of cloud fundamentals and Oracle Cloud's architecture and services.</div>
                    <div style={{ width: 124, height: 15, left: 16, top: 60, position: 'absolute', color: 'white', fontSize: 14.75, fontFamily: 'Outfit', fontWeight: '600', wordWrap: 'break-word' }}>Oracle University</div>
                    <div style={{ width: 277, height: 15, left: 16, top: 25, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Outfit', fontWeight: '600', wordWrap: 'break-word' }}>Oracle Cloud Infrastructure Foundations Associate</div>
                </div>
                {/* course 9 */}
                <div data-aos="slide-up" style={{ width: 295, height: 221.25, position: 'relative' }} id='eff'>
                    <div style={{ width: 295, height: 221.25, left: 0, top: 0, position: 'absolute', background: 'rgba(77.24, 76.49, 76.49, 0.60)', boxShadow: 'inset 0px 0px 8px rgba(219, 219, 219, 0.65)', borderRadius: 14.75, backdropFilter: 'blur(4.36px)' }} />
                    <button onClick={showres9} style={{ width: 51.62, height: 22.12, position: 'absolute', left: 122.43, top: 177.74, background: '#D9D9D9', borderRadius: 14.75, border: 'none', fontSize: 11.8, fontFamily: 'Outfit', fontWeight: 400, color: '#0D0C0C', cursor: 'pointer', textAlign: 'center', lineHeight: '22.12px', padding: 0 }}>
                        view
                    </button>
                    <div style={{ width: 263, left: 16, top: 81, position: 'absolute', textAlign: 'justify', color: '#B3B3B3', fontSize: 11.80, fontFamily: 'Outfit', fontWeight: '400', wordWrap: 'break-word' }}>Learned how to navigate and manage files using Linux terminal commands. Gained confidence in using the CLI for tasks like file operations, permissions, and system monitoring.</div>
                    <div style={{ width: 60.47, height: 15.49, left: 16, top: 50, position: 'absolute', color: 'white', fontSize: 14.75, fontFamily: 'Outfit', fontWeight: '600', wordWrap: 'break-word' }}>coursera</div>
                    <div style={{ width: 277, height: 15, left: 16, top: 25, position: 'absolute', color: 'white', fontSize: 16, fontFamily: 'Outfit', fontWeight: '600', wordWrap: 'break-word' }}>Command line basics in linux</div>
                </div>
                {/* course 10 */}
                <div data-aos="slide-up" style={{ width: 295, height: 250, position: 'relative' }} id='eff'>
                    <div style={{ width: 295, height: 250, left: 0, top: 0, position: 'absolute', background: 'rgba(77.24, 76.49, 76.49, 0.60)', boxShadow: 'inset 0px 0px 8px rgba(219, 219, 219, 0.65)', borderRadius: 14.75, backdropFilter: 'blur(4.36px)' }} />
                    <button onClick={showres10} style={{ width: 51.62, height: 22.12, position: 'absolute', left: 122.43, top: 220.74, background: '#D9D9D9', borderRadius: 14.75, border: 'none', fontSize: 11.8, fontFamily: 'Outfit', fontWeight: 400, color: '#0D0C0C', cursor: 'pointer', textAlign: 'center', lineHeight: '22.12px', padding: 0 }}>
                        view
                    </button>
                    <div style={{ width: 263, left: 11, top: 136, position: 'absolute', textAlign: 'justify', color: '#B3B3B3', fontSize: 11.80, fontFamily: 'Outfit', fontWeight: '400', wordWrap: 'break-word' }}>Presented a research paper on a web-based platform for booking certified electricians using geolocation and real-time service matching. The system enhances accessibility for customers and visibility for electricians.</div>
                    <div style={{ width: 277, height: 15, left: 11, top: 54, position: 'absolute', color: 'white', fontSize: 12, fontFamily: 'Outfit', fontWeight: '600', wordWrap: 'break-word' }}>Conference: International Conference on Transformative and Inclusive Science for Sustainable Future</div>
                    <div style={{ width: 277, height: 15, left: 11, top: 102, position: 'absolute', color: 'white', fontSize: 12, fontFamily: 'Outfit', fontWeight: '400', wordWrap: 'break-word' }}>Organized by: Vidhya Sagar Women’s College – School of Science<br /></div>
                    <div style={{ width: 277, height: 15, left: 11, top: 16, position: 'absolute', color: 'white', fontSize: 14, fontFamily: 'Outfit', fontWeight: '600', wordWrap: 'break-word' }}>Paper Presented: Smart Electrician Booking System Website</div>
                </div>
            </div>
            <div id='crt-foot' >
                <Footer />
            </div>
        </div>
    )
}

export default Certificatemain