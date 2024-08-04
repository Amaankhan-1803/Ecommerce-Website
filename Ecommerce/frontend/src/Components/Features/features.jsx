import React from 'react'
import './features.css'
import feat1 from '../Assets/feat1.png'
import feat2 from '../Assets/feat2.png'
import feat3 from '../Assets/feat3.png'
const Features = () => {
  return (
    <div>
      <div className="features container-fluid py-3">
        <div className="section-heading">
            <h2 className="text-center fs-2 fw-bold pb-2">Our Features</h2>
        </div>
        <div className="row">
            <div className="col-md-4">
            <div class="card p-3" >
                <div className="card_feat align-items-center">
                    <img src={feat1} class="card-img-top" alt="..."/>
                    <h4 className="card-title">Free Shipping</h4>
                </div>
                <div class="card-body">
                    <p class="card-text">Enjoy hassle-free shopping with our free shipping service on all orders. No minimum purchase required.</p>
                </div>
            </div>
            </div>
            <div className="col-md-4">
            <div class="card p-3" >
                <div className="card_feat align-items-center">
                    <img src={feat2} class="card-img-top" alt="..."/>
                    <h4 className="card-title">Secure Payment</h4>
                </div>
                <div class="card-body">
                    <p class="card-text">Our system uses advanced encryption to protect your financial info, ensuring safe and reliable transactions every time.</p>
                </div>
            </div>
            </div>
            <div className="col-md-4">
            <div class="card p-3" >
                <div className="card_feat align-items-center">
                    <img src={feat3} class="card-img-top" alt="..."/>
                    <h4 className="card-title">24/7 Support</h4>
                </div>
                <div class="card-body">
                    <p class="card-text">Enjoy peace of mind with our 24/7 support. Our dedicated team is always available to assist you anytime, day or night.</p>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Features
