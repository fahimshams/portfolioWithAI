import React, { useState, useEffect } from 'react';
import './Intro.css';
import logo1 from './images/front-end-logo.png';
import profile1 from './images/profile1.jpg';
import profile2 from './images/profile2.jpg';
import profile3 from './images/profile3.jpg';
import profile4 from './images/profile4.jpg';
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';


const Intro = () => {


    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % 4);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const images = [profile1, profile2, profile3, profile4];


    return (
        <div className="intro-container">
            <h1 className="intro-text">
                {/* <h2 className='intro'>Hi There! Welcome to know me more</h2>
                <p className='intro-p'>I am a Software Engineer</p> */}
                {/* <img src={logo1} alt='Front-End'></img> */}
                <span>Hi</span>

                <p>My name is Fahim Ibne Shams!</p>

                <div className="social-icons">
                    <p style={{ marginBottom: '30px' }}>Visit my social media sites:</p>
                    <div className="icon-container">
                        <div >
                            <a href="https://www.linkedin.com/in/fis/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                            <p>LinkedIn</p>
                        </div>
                        <div >
                            <a href="https://www.facebook.com/fahim.pranjol/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                            <p>Facebook</p>
                        </div>
                        <div >
                            <a href="https://www.instagram.com/fahimpranjol/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                            <p>Instagram</p>
                        </div>
                        <div >
                            <a href="https://github.com/fahimshams" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                            <p>GitHub</p>
                        </div>
                    </div>
                </div>
            </h1>




            <div className="image-container">
                <img style={{ width: '30rem', height: '28rem', marginTop: '20px' }} src={images[currentIndex]} alt='Fahim Shams'></img>
            </div>

        </div>

    )
}

export default Intro;


