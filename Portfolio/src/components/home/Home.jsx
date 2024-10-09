import React from "react";
import "./Home.css";
import Me from "../../assets/2.gif";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
     tsParticles.load("tsparticles", {
            fps_limit: 60,
            interactivity: {
                detect_on: "canvas",
                events: {
                    onclick: { enable: true, mode: "push" },
                    onhover: {
                        enable: true,
                        mode: "attract",
                        parallax: { enable: false, force: 60, smooth: 10 }
                    },
                    resize: true
                },
                modes: {
                    push: { quantity: 4 },
                    attract: { distance: 200, duration: 0.4, factor: 5 }
                }
            },
            particles: {
                color: { value: "#ffffff" },
                line_linked: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    bounce: false,
                    direction: "none",
                    enable: true,
                    out_mode: "out",
                    speed: 2
                },
                number: {
                    density: { enable: true, value_area: 800 },
                    value: 80
                },
                opacity: {
                    value: 0.5
                },
                shape: {
                    type: "circle"
                },
                size: {
                    random: true,
                    value: 5
                }
            },
            retina_detect: true
        });
  return (
    
    <>
    <div>
    <div id="tsparticles" style={{ position: 'relative', height: '100vh' }}>
    <section className="home container"   id="home">
      <div className="intro">
        <img src={Me} className="home__img" width="320" />
        <h1 className="home__name">Karan Raval</h1>
        <span className="home__education">I'm into Full-stack Devloper</span>
        <HeaderSocials />
        <ScrollDown />
      </div>
      <Shapes />
    </section>
    </div>
    </div>
    </>
  );
};

export default Home;
