import React from 'react'

// import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>Reliable Taxi Service in Rajkot – 24×7</h1>

        <p className="hero-subtitle">
          Airport • Outstation • Local • Corporate
        </p>

        <div className="hero-buttons">
          <a
            href="https://wa.me/6354715134?text=Hi%20I%20want%20to%20book%20a%20taxi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            Book Now
          </a>

          <a href="tel:+6354715134" className="btn btn-call">
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
