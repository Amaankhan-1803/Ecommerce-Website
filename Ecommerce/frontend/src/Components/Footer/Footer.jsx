import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'
import scroll from '../Assets/scroll.png'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

  return (
    <div>
      <div className="Footer container-fluid">
            <div className="scrolltop text-end">
                <button onClick={scrollToTop}><img src={scroll} width="15px" height="15px" alt="" /></button>
            </div>
        <div className="row">
            <div className="col-md-3">
                <div className="brand text-start">
                    <img src={logo} alt="" />
                    <p className="brand-text ">
                    Ekart is your trusted online shopping destination, offering a wide range of products, secure payments, and fast delivery to enhance your shopping experience. Shop with confidence at Ekart!
                    </p>
                </div>
            </div>
            <div className="col-md-3">
                <div className="quick text-start">
                    <h5 className="link-title">Quick Links</h5>
                    <p className="brand-text ">
                    <ul className='p-0'>
                        <li className='quick_links pb-2'><Link to = '/about-us'>About Us</Link></li>
                        <li className='quick_links pb-2'><Link to='/'>Offers & Discounts</Link></li>
                        <li className='quick_links pb-2'><Link to='/'>Get Coupon</Link></li>
                        <li className='quick_links'><Link to = '/contact-us'>Contact Us</Link></li>
                    </ul>
                    </p>
                </div>
            </div>
            <div className="col-md-3">
                <div className="quick text-start">
                    <h5 className="link-title">New Products</h5>
                    <p className="brand-text ">
                    <ul className='p-0'>
                        <li className='quick_links pb-2'><Link to = '/fashion'>Fashion</Link></li>
                        <li className='quick_links pb-2'><Link to='/decor'>Decor</Link></li>
                        <li className='quick_links pb-2'><Link to='/kitchen'>Kitchen Appliances</Link></li>
                        <li className='quick_links'><Link to = '/sports'>Sports</Link></li>
                    </ul>
                    </p>
                </div>
            </div>
            <div className="col-md-3">
                <div className="quick text-start">
                    <h5 className="link-title">Support</h5>
                    <p className="brand-text ">
                    <ul className='p-0'>
                        <li className='quick_links pb-2'><Link to = '/'>FAQ</Link></li>
                        <li className='quick_links pb-2'><Link to='/'>Terms & Conditions</Link></li>
                        <li className='quick_links pb-2'><Link to='/'>Privacy Policy</Link></li>
                        <li className='quick_links'><Link to = '/'>Payment Issue</Link></li>
                    </ul>
                    </p>
                </div>
            </div>
        </div>
        <hr />
        <p className="copy-text text-light fs-6 text-capitalize">&copy; 2024 All rights reserved</p> 
      </div>
    </div>
  )
}

export default Footer
