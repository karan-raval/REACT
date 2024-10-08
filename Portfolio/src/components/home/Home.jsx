import React from 'react';
import './Home.css';
import Me from '../../assets/2.gif';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (

        <section className="home container" id='home'>
            <div className="intro">
                <img src={Me} className='home__img' width='320' />
                <h1 className="home__name">Karan Raval</h1>
                <span className="home__education">I'm into Full-stack Devloper</span>

                <HeaderSocials />

                {/* <a href="#contact" className="btn"> Contact Me</a> */}

                <ScrollDown />
            </div>

            <Shapes />
        </section>
    )
}

export default Home