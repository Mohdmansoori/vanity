import React from 'react';
import { Link } from 'react-router-dom'
import icon from '../images/image\ 1.png';
import Email from '../images/envolve.png';
import Call from '../images/call.png';
import Insta from '../images/insta.png';
import Facebook from '../images/facebook.png';
import Youtube from '../images/youtube.png';
import Bell from '../images/bell.png';

function Footer() {
  return (
    <>
    <section>
      <div className="container-fluid overlay">
        <div className="footer-banner"></div>
        <div className="container">
          <Link to={'/Home'}>
          <img src={icon} className="vanity-logo"/></Link>
          <div className="row footer-row">
            <div className="col-md-3">
              <Link to={'/About'}><h5 >ABOUT US</h5></Link>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra morbi nisi, tortor quam integer..</p>
                 <div className="Social-media-icons">
                   <Link to="https://www.instagram.com"><img src={Insta}/></Link>
                   <Link to="https://www.facebook.com/"><img src={Facebook} className="social-facebook"/></Link>
                   <Link to="https://www.youtube.com/"><img src={Youtube} className="social-youtube"/></Link>
                   <Link to="https://www.snapchat.com/" ><img src={Bell} className="social-bell"/></Link>
                   </div> 
              </div>
            <div className="col-md-3 locate">
              <h5>LOCATE US</h5>
              <p>Majidi Mall <br />Erbil, Iraq</p>
              <img src={Call} /> <span className="carrer-email">+964 123 000 1111</span>
              </div>
            <div className="col-md-3 categories">
              <h5>CATEGORIES</h5>
              <ul>
                <Link to={'/Home'}><li>Home</li></Link>
                <Link to={'/Womens'}><li>Woman</li></Link>
                <Link to={'/Mens'}><li>Man</li></Link>
                <Link to={'/Kids'}><li>Kids</li></Link>
                <Link to={'/Brands'}><li>Brands</li></Link>
                <Link to={'/Contact'}><li>Contact Us</li></Link>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>CAREER</h5>
              <div>
              <img src={Email} /> <span className="carrer-email">career@email.com</span>
              </div>
              <div>
              <img src={Call} /> <span className="carrer-email">+964 123 000 1111</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="vanity-bottom"><p>© All Rights Reserved - 2021 Vanity Kart</p></div>
      
    </section>
    </>
    
  )
}

export default Footer;