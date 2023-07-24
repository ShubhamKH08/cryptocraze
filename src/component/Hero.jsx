import React from 'react'
import "./hero.css"
import bearImg from "../assest/bear_image.png"
import 'bootstrap/dist/css/bootstrap.css';

export default function Hero() {
  return (
    <div className='hero-container-prod'>
      <div className="hero-home-container-text">
        <div className="hero-home-slogan">

          <span className='slogan-about-web-text my-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
          <div className="bold-slogan-hero-home">Decentrallized anonymous platform</div>
          <div className="light-slogan-about-web d-flex my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Tempore odit temporibus voluptatum vel quam ipsa atque, assumenda ut, quos dolore sint dignissimos. 
          Cupiditate voluptatibus facilis in ratione vero tempore itaque?</div>


          <div className="hero-home-btn-view placeholder-wave" style={{cursor:"pointer"}}>
            <button  >View Marketplace --></button>
            Get Started
          </div>
        </div>

      </div>

        <div className="hero-home-bg-img">
          <img src={bearImg} className='bg-img-hero'/>
        </div>
      
    </div>
  )
}
