import React from 'react';
import './skills.css';
import html from './assets/html.png'
import css from './assets/css.png'
import JavaScript from './assets/javascript.png'
import react from './assets/react.png'
import Figma from './assets/figma.png'
import python from './assets/python.png'
import java from './assets/java.png'
import mysql from './assets/mysql.png'
import github from './assets/github.png'
import git from './assets/git.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function Skills() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
            height: 10,
        });
    }, []);
    return (
        <div id="skills">

            <h6 data-aos="slide-up">My Skills</h6>
            <h1 data-aos="slide-up">The Secret  <span> Sauce</span></h1>

            <div className='skillsSet'>
                {/* html */}
                <div className="skill-card" style={{ width: 130, height: 130, position: 'relative' }}>
                    <div style={{ width: 130, height: 130, left: 0, top: 0, position: 'absolute', background: 'rgba(77.24, 76.49, 76.49, 0.60)', boxShadow: '-0.6891191601753235px 0.6891191601753235px 2.756476640701294px rgba(219.45, 219.45, 219.45, 0.65) inset', borderRadius: 13.78, backdropFilter: 'blur(5.92px)' }} />
                    <img style={{ width: 65.34, height: 65.34, left: 32.33, top: 19.30, position: 'absolute' }} src={html} />
                    <div style={{ width: 82.85, height: 27.62, left: 30.31, top: 88.24, position: 'absolute', color: 'white', fontSize: 27.56, fontFamily: 'Outfit', fontWeight: '500', wordWrap: 'break-word' }}>HTML</div>
                </div>
                {/* css */}
                <div className="skill-card" style={{ width: 130, height: 130, position: 'relative' }}>
                    <div style={{ width: 130, height: 130, left: 0, top: 0, position: 'absolute', background: 'rgba(77.24, 76.49, 76.49, 0.60)', boxShadow: '-0.6891191601753235px 0.6891191601753235px 2.756476640701294px rgba(219.45, 219.45, 219.45, 0.65) inset', borderRadius: 13.78, backdropFilter: 'blur(5.92px)' }} />
                    <img style={{ width: 65.34, height: 65.34, left: 32.33, top: 19.30, position: 'absolute' }} src={css} />
                    <div style={{ width: 82.85, height: 27.62, left: 40.31, top: 88.24, position: 'absolute', color: 'white', fontSize: 27.56, fontFamily: 'Outfit', fontWeight: '500', wordWrap: 'break-word' }}>CSS</div>
                </div>
                {/* javascript */}
                <div className="skill-card" style={{ width: 130, height: 130, position: 'relative' }}>
                    <div style={{ width: 130, height: 130, left: 0, top: 0, position: 'absolute', background: 'rgba(77.24, 76.49, 76.49, 0.60)', boxShadow: '-0.5854922533035278px 0.5854922533035278px 2.3419690132141113px rgba(219.45, 219.45, 219.45, 0.65) inset', borderRadius: 11.71, backdropFilter: 'blur(5.03px)' }} />
                    <img style={{ width: 100.36, height: 100.36, left: 16.17, top: 2.93, position: 'absolute' }} src={JavaScript} />
                    <div style={{ width: 114.51, height: 27.62, left: 17.78, top: 88.91, position: 'absolute', color: 'white', fontSize: 21.08, fontFamily: 'Outfit', fontWeight: '500', wordWrap: 'break-word' }}>Javascript</div>
                </div>
                {/* react */}
                <div className="skill-card" style={{ width: 130, height: 130, position: 'relative' }}>
                    <div style={{ width: 130, height: 130, left: 0, top: 0, position: 'absolute', background: 'rgba(77.24, 76.49, 76.49, 0.60)', boxShadow: '-0.6321243643760681px 0.6321243643760681px 2.5284974575042725px rgba(219.45, 219.45, 219.45, 0.65) inset', borderRadius: 12.64, backdropFilter: 'blur(5.43px)' }} />
                    <div style={{ width: 76.11, height: 27.62, left: 31.66, top: 88.24, position: 'absolute', color: 'white', fontSize: 25.28, fontFamily: 'Outfit', fontWeight: '500', wordWrap: 'break-word' }}>React</div>
                    <img style={{ width: 65.34, height: 60.34, left: 31.66, top: 22.70, position: 'absolute' }} src={react} />
                </div>
                {/* figma */}
                <div className="skill-card" style={{ width: 130, height: 130, position: 'relative' }}>
                    <div style={{ width: 130, height: 130, left: 0, top: 0, position: 'absolute', background: 'rgba(77.24, 76.49, 76.49, 0.60)', boxShadow: '-0.6632124185562134px 0.6632124185562134px 2.6528496742248535px rgba(219.45, 219.45, 219.45, 0.65) inset', borderRadius: 13.26, backdropFilter: 'blur(5.69px)' }} />
                    <img style={{ width: 65, height: 65, left: 30.98, top: 18.57, position: 'absolute' }} src={Figma} />
                    <div style={{ width: 82.18, height: 27.62, left: 27.62, top: 88.24, position: 'absolute', color: 'white', fontSize: 26.53, fontFamily: 'Outfit', fontWeight: '500', wordWrap: 'break-word' }}>Figma</div>
                </div>
                {/* python */}
                <div className="skill-card" style={{ width: 130, height: 130, position: 'relative' }}>
                    <div style={{ width: 130, height: 130, left: 0, top: 0, position: 'absolute', background: 'rgba(77.24, 76.49, 76.49, 0.60)', boxShadow: '-0.6476683616638184px 0.6476683616638184px 2.5906734466552734px rgba(219.45, 219.45, 219.45, 0.65) inset', borderRadius: 12.95, backdropFilter: 'blur(5.56px)' }} />
                    <img style={{ width: 65, height: 65, left: 32.33, top: 18.13, position: 'absolute' }} src={python} />
                    <div style={{ width: 106.42, height: 27.62, left: 23.58, top: 88.24, position: 'absolute', color: 'white', fontSize: 25.91, fontFamily: 'Outfit', fontWeight: '500', wordWrap: 'break-word' }}>Python </div>
                </div>
                {/* java */}
                <div className="skill-card" style={{ width: 130, height: 130, position: 'relative' }}>
                    <div style={{ width: 130, height: 130, left: 0, top: 0, position: 'absolute', background: 'rgba(77.24, 76.49, 76.49, 0.60)', boxShadow: '-0.5025906562805176px 0.5025906562805176px 2.0103626251220703px rgba(219.45, 219.45, 219.45, 0.65) inset', borderRadius: 10.05, backdropFilter: 'blur(4.31px)' }} />
                    <div style={{ width: 60.62, height: 27.62, left: 36, top: 89, position: 'absolute', color: 'white', fontSize: 25, fontFamily: 'Outfit', fontWeight: '500', wordWrap: 'break-word' }}>Java</div>
                    <img style={{ width: 70.66, height: 70.66, left: 27.33, top: 14.07, position: 'absolute' }} src={java} />
                </div>
                {/* MySql */}
                <div className="skill-card" style={{ width: 130, height: 130, position: 'relative' }}>
                    <div style={{ width: 130, height: 130, left: 0, top: 0, position: 'absolute', background: 'rgba(77.24, 76.49, 76.49, 0.60)', boxShadow: '-0.621761679649353px 0.621761679649353px 2.487046718597412px rgba(219.45, 219.45, 219.45, 0.65) inset', borderRadius: 12.44, backdropFilter: 'blur(5.34px)' }} />
                    <div style={{ width: 76.11, height: 27.62, left: 31.66, top: 88.24, position: 'absolute', color: 'white', fontSize: 24.87, fontFamily: 'Outfit', fontWeight: '500', wordWrap: 'break-word' }}>MySql</div>
                    <img style={{ width: 65.28, height: 66.75, left: 31.66, top: 16.17, position: 'absolute', borderRadius: 74.61 }} src={mysql} />
                </div>
                {/* github */}
                <div className="skill-card" style={{ width: 130, height: 130, position: 'relative' }}>
                    <div style={{ width: 130, height: 130, left: 0, top: 0, position: 'absolute', background: 'rgba(77.24, 76.49, 76.49, 0.60)', boxShadow: '-0.5025906562805176px 0.5025906562805176px 2.0103626251220703px rgba(219.45, 219.45, 219.45, 0.65) inset', borderRadius: 10.05, backdropFilter: 'blur(4.31px)' }} />
                    <div style={{ width: 58, height: 28, left: 36, top: 87, position: 'absolute', color: 'white', fontSize: 18.09, fontFamily: 'Outfit', fontWeight: '500', wordWrap: 'break-word' }}>GitHub</div>
                    <img style={{ width: 64.65, height: 64, left: 33.98, top: 19.58, position: 'absolute', borderRadius: 50.26 }} src={github} />
                </div>
                {/* git */}
                <div className="skill-card" style={{ width: 130, height: 130, position: 'relative' }}>
                    <div style={{ width: 130, height: 130, left: 0, top: 0, position: 'absolute', background: 'rgba(77.24, 76.49, 76.49, 0.60)', boxShadow: '-0.5440414547920227px 0.5440414547920227px 2.176165819168091px rgba(219.45, 219.45, 219.45, 0.65) inset', borderRadius: 10.88, backdropFilter: 'blur(4.67px)' }} />
                    <img style={{ width: 65, height: 65, left: 32.33, top: 15.23, position: 'absolute' }} src={git} />
                    <div style={{ width: 82.85, height: 27.62, left: 47.15, top: 84.87, position: 'absolute', color: 'white', fontSize: 21.76, fontFamily: 'Outfit', fontWeight: '500', wordWrap: 'break-word' }}>Git</div>
                </div>
            </div>
            <div data-aos="slide-rigth" className="gradient-line one bottom"></div>
            <div data-aos="slide-left" className="gradient-line two bottom"></div>


        </div>
    );
}

export default Skills;
