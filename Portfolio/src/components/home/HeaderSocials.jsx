import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter, FaDev } from 'react-icons/fa';
import { FaInstagram } from "react-icons/fa";
const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/karan-raval' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            <a href='https://hashnode.com/@gregsithole' className='home__social-link' target='_blank' rel='noreferrer'>
            <FaInstagram />
            </a>

            {/* <a href='https://dev.to/gregsithole' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaDev />
            </a> */}

            <a href='https://www.linkedin.com/in/karan-raval-8b5b0b203/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            {/* <a href='https://wwww.facebook.com/Greg.Sithole' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaFacebookF />
            </a> */}

            {/* <a href='https://www.twitter.com/GregSithole' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaTwitter />
            </a> */}
        </div>
    );
};

export default HeaderSocials;
