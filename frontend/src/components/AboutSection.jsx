import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="home-about-section" ref={sectionRef} id="about">
      <div className="home-about-container">
        {/* Text Content */}
        <div className="home-about-content">
          <h2 className="home-about-title">ABOUT RAZE</h2>
          <p className="home-about-subtitle">Built by Discipline. Made to Move.</p>
          
          <p className="home-about-text">
            Most sportswear is designed to look good — not to move properly. As gymnasts, we created RAZE for athletes who need clothing that moves with them, not against them.
          </p>
          
          <Link to="/about" className="home-about-link">
            Learn More <ArrowRight size={18} />
          </Link>
        </div>

        {/* Images */}
        <div className="home-about-images">
          <div className={`home-about-image-wrapper ${isVisible ? 'animate-fade-in-up' : ''}`}>
            <img 
              src="/images/athletes/mag_athlete.jpg" 
              alt="Male gymnast training"
              className="home-about-image"
            />
            <span className="home-about-image-label">MAG</span>
          </div>
          <div className={`home-about-image-wrapper ${isVisible ? 'animate-fade-in-up delay-200' : ''}`}>
            <img 
              src="/images/athletes/wag_athlete.jpg" 
              alt="Female gymnast training"
              className="home-about-image"
            />
            <span className="home-about-image-label">WAG</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
