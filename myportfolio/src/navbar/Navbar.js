import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Set the navbar visible after a short delay to allow for the sliding effect
        const timeout = setTimeout(() => {
            setIsVisible(true);
        }, 400);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <nav className={`navbar ${isVisible ? 'active' : ''}`}>
            <div className='container'>
                <div className='logo'>Fahim Ibne Shams</div>
                <ul className={`nav-links ${isOpen ? "active" : ""}`}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#assistant">Assistant</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;


