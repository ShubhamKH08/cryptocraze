import React from 'react';
import { useState } from 'react';
import './topbar.css'
import FlagIcon from "../assest/flag.jpg"
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css';

export default function TopBar() {
    const [selectedOption, setSelectedOption] = useState('home');

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };
    return (
        <div className='nav_containar'>
            <div className="top-bar-left-logo-version ">
            <div className="web_logo"></div>
            <div className="top-bar-version-sectn">v 10</div></div>
            <div className="nav_option">

                <ul className="ul_option">
                    <li><Link to=""
                        className={`top-bar-ul-li-links no-underline ${selectedOption === 'home' ? 'selected' : ''}`}
                        onClick={() => handleOptionClick('home')}>Home</Link></li>
                    <li><Link to="/"
                        className={`top-bar-ul-li-links no-underline ${selectedOption === 'Phome' ? 'selected' : ''}`}
                        onClick={() => handleOptionClick('Phome')}>P2P</Link></li>
                    <li><Link to="/"
                        className={`top-bar-ul-li-links no-underline ${selectedOption === 'News' ? 'selected' : ''}`}
                        onClick={() => handleOptionClick('News')}>Wallet</Link></li>
                        <li><Link to="/"
                        className={`top-bar-ul-li-links no-underline ${selectedOption === 'aboutUs' ? 'selected' : ''}`}
                        onClick={() => handleOptionClick('ABOUTuS')}>About Us</Link></li>
                  
                </ul>

            </div>
            <div className="top-bar-profile-sectn">
                        <div className="top-bar-country-loc">
                       <img src={FlagIcon} className='top-bar-flag-icon '/>In</div>
                   
                        <button className="top-bar-btn-get-start">Get Started</button>
             
            </div>
        </div>
    );
}