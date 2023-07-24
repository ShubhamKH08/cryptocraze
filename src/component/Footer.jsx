import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from "../assest/logo.svg"
const Footer = () => {
    return (
        <div className="container-fluid justify-content-center">

            <hr className="mx-0 px-0" />
            <footer>
                <div className="row justify-content-around mb-0 pt-5 pb-0 ">
                    <div className="col-11">
                        <div className="row justify-content-center">
                            <div className="col-md-3 col-12 font-italic align-items-center  mt-md-3 mt-4">
                                <h5>
                                    <span>
                                        {' '}
                                        <img
                                            src={logo}
                                            className="img-fluid mb-1 "
                                            alt=""
                                            style={{ width: "50px", height: "50px" }} />
                                    </span>
                                    <b className="text-light">
                                        {' '}
                                        Crypto<span className="text-light fw-bold">Craze</span>
                                    </b>
                                </h5>
                                <p className="social mt-md-3 mt-2">
                                    <span>
                                        <FaFacebook style={{backgroundColor:"rgba(198, 212, 235, 0.847)"}}/>
                                    </span>{' '}
                                    <span>
                                        <FaLinkedin style={{backgroundColor:"rgba(198, 212, 235, 0.847)"}}/>
                                    </span>{' '}
                                    <span>
                                        <FaTwitter style={{backgroundColor:"rgba(198, 212, 235, 0.847)"}}/>
                                    </span>{' '}
                                </p>
                                <small className="copy-rights cursor-pointer " style={{color:"rgba(212, 228, 254, 0.512)"}}>&#9400; 2023 CryptoCraze indain trading platform</small>
                                <br />
                                <small style={{color:"rgba(212, 228, 254, 0.512)"}}>Copyright. All Rights Reserved. </small>
                            </div>
                            <div className="col-md-3 col-12  my-sm-0 mt-5">
                                <ul className="list-unstyled">
                                    <li className="mt-md-3 mt-4" style={{ color: 'rgba(198, 212, 235, 0.847)', fontFamily: 'Arial', fontSize: '20px' }}>
                                        Our Solution
                                    </li>
                                    <br></br>
                                    <li style={{ color: 'rgba(212, 228, 254, 0.512)'}}>Integrated Security Platform</li>
                                    <li style={{ color: 'rgba(212, 228, 254, 0.512)'}}>Core Features</li>
                                    <li style={{ color: 'rgba(212, 228, 254, 0.512)'}}>Product Features</li>
                                    <li style={{ color: 'rgba(212, 228, 254, 0.512)'}}>Pricing</li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-12 my-sm-0 mt-5">
                                <ul className="list-unstyled">
                                <li className="mt-md-3 mt-4" style={{ color: 'rgba(198, 212, 235, 0.847)', fontFamily: 'Arial', fontSize: '20px' }}>
                                        Your Needs
                                    </li>
                                    <br></br>
                                    <div className='newColor'>
                                    <li style={{ color: 'rgba(212, 228, 254, 0.512)'}}>Integrated Security Platform</li>
                                    <li style={{ color: 'rgba(212, 228, 254, 0.512)'}}>Core Features</li>
                                    <li style={{ color: 'rgba(212, 228, 254, 0.512)'}}>Product Features</li>
                                    <li style={{ color: 'rgba(212, 228, 254, 0.512)'}}>Pricing</li>
                                    </div>
                                </ul>
                            </div>
                            <div className="col-xl-auto col-md-3 col-12 my-sm-0 mt-5">
                                <ul className="list-unstyled">
                                <li className="mt-md-3 mt-4" style={{ color: 'rgba(198, 212, 235, 0.847)', fontFamily: 'Arial', fontSize: '20px' }}>
                                       Offer
                                    </li>
                                    <br></br>
                                    <li style={{ color: 'rgba(212, 228, 254, 0.512)'}}>Integrated Security Platform</li>
                                    <li style={{ color: 'rgba(212, 228, 254, 0.512)'}}>Core Features</li>
                                    <li style={{ color: 'rgba(212, 228, 254, 0.512)'}}>Product Features</li>
                                    <li style={{ color: 'rgba(212, 228, 254, 0.512)'}}>Pricing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;

  
