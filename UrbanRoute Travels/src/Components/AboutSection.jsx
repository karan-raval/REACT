import React from "react";
// import "./AboutSection.css";
import carImg from "../assets/image/car.png"; // your car image

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* LEFT CONTENT */}
        <div className="about-content">
          <h2>
            About <br />
            UrbanRoute Travels
          </h2>

          <span className="yellow-line"></span>

          <p>
            UrbanRoute Travels provides reliable, comfortable, and affordable
            taxi services. From city rides to outstation journeys, we ensure
            safety, punctuality, and premium travel experience for every
            customer.
          </p>

          <button className="about-btn">Read More</button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="about-image-wrapper">
          <div className="image-bg"></div>
          <img src={carImg} alt="Taxi Car" />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
