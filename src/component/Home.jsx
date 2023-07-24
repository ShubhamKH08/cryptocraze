import React from 'react'
import TopBar from './Topbar'
import Hero from './Hero'
import Connect from './Connect'
import Footer from './Footer'
import "./home.css"
export default function Home() {
  return (
    <div className='home-page-containts-1'>
      <div className="first-hero-sctn-home">
          <nav>
            <TopBar/>
            </nav>
      
            <Hero/>
        
        </div>
            <Connect/>
            {/* <footer className='footer-home'> */}
              <Footer/>
            {/* </footer> */}
    </div>
  )
}
