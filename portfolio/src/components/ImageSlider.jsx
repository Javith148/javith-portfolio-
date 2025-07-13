import React, { useState, useEffect } from 'react';
import './slider.css';

import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';

const images = [
    { src: img1, caption: 'I Learn' },
    { src: img2, caption: 'I Code' },
    { src: img3, caption: 'I Design' }
];

export default function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(1);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slider-container">
            {images.map((item, index) => {
                let className = 'slide';
                if (index === currentIndex) className += ' active';
                else if (index === (currentIndex - 1 + images.length) % images.length) className += ' left';
                else if (index === (currentIndex + 1) % images.length) className += ' right';

                return (
                    <div key={index} className={`slide-wrapper ${className}`}>
                        <img src={item.src} alt="" className="slide-img" />
                        <div className="caption">{item.caption}</div>
                    </div>
                );
            })}
        </div>
    );
}