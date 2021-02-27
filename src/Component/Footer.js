import React from 'react';
import { Link } from 'react-router-dom'
import icon from '../images/image\ 1.png';
import Youtube from '../images/youtube.png';
import Facebook from '../images/facebook.png';
import Insta from '../images/insta.png';
import Bell  from '../images/notification.png';
import Email from '../images/envolve.png';
import Call from '../images/call.png';

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
              <div className="">
              <i className="fa fa-instagram insta" aria-hidden="true"></i>
              <i className="fa fa-facebook facebook" aria-hidden="true"></i>                
              <i className="fa fa-youtube-play youtube" aria-hidden="true"></i>
              <i className="fa fa-bell-o notification" aria-hidden="true"></i>
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