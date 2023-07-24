import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "./connect.css"
import  paypalIcon from "../assest/paypal.svg"
import  walletIcon from "../assest/wallet.png"
import  peopleIcon from "../assest/people.png"
import  seeIcon from "../assest/see.png"
import  tradeIcon from "../assest/trade.png"
import  escrowIcon from "../assest/escrow.png"
import  speedIcon from "../assest/speed.png"

export default function Connect() {
  return (
    <div className='connect-page-container'>
        <div className="policy-info-div">Lorem ipsum dolor sit amet consectetur assjud.</div>
        <div className="payment-method">
            <ul className='ul-list-pay'>
                <li><img src={paypalIcon} className='m-1 '/>PayPal</li>
                <li>GPay</li>
                <li>UPI</li>
                <li>Wallet</li>
                <li>VISA</li>
            </ul>
        </div>

        <div className="connect-info-text fw-bolder display-5 m-5">Peer-to-peer trading has never been easier</div>

    <div className="connect-cards-home">

      <div className="connect-card">
        <img src={peopleIcon} className="card-img" alt="" />
        <span>Create an account</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Odio, iure?Lorem ipsum dolor sit amet.</p>
      </div>

      <div className="connect-card">
        <img src={seeIcon} className="card-img" alt="" />
        <span>See who is buying and sellings</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Odio, iure?Lorem ipsum dolor sit amet.</p>
      </div>

      <div className="connect-card">
        <img src={tradeIcon} className="card-img" alt="" />
        <span>Open a trade</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Odio, iure?Lorem ipsum dolor sit amet.</p>
      </div>
    </div>

    <div className="buy-crypto-container m-5">

      <div className="buy-text">Buy and sell crypto directly to/ from your counterparty</div>

      <div className="buy-connect-card">
      <img src={escrowIcon} className="card-img" alt="" />
        <span>Escrow Service</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Odio, iure?Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="buy-connect-card">
      <img src={speedIcon}  className="card-img" alt="" />
        <span>Speed</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Odio, iure?Lorem ipsum dolor sit amet.</p>
      </div>

      </div>

    </div>
    // </div>
  )
}


// data-bs-toggle="tooltip" data-bs-placement="up" title="Trading place" tabindex="0"