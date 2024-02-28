import React, { useState, useEffect } from 'react';
import './Intro.css';
import logo1 from './images/front-end-logo.png';
import Avatar, { genConfig } from 'react-nice-avatar';

const Intro = () => {


    const config = genConfig({ shirtStyle: "polo", glassesStyle: " none", hairColor: "black", shape: "round", sex: "man", hairStyle: "normal", faceColor: "white" })



    return (
        <div className="intro-container">
            <h1 className="intro-text">
                {/* <h2 className='intro'>Hi There! Welcome to know me more</h2>
                <p className='intro-p'>I am a Software Engineer</p> */}
                {/* <img src={logo1} alt='Front-End'></img> */}
                <span>Hi</span>

                <p>My name is Fahim Ibne Shams!</p>
            </h1>

            <div className="avatar-container">
                <Avatar style={{ width: '8rem', height: '8rem' }} {...config} />

                {/* Your animated avatar component goes here */}
                {/* Example: <AnimatedAvatar /> */}
            </div>
        </div>

    )
}

export default Intro;


