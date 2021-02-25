import React from 'react';
import icon from '../images/image\ 1.png';
import Twitter from '../images/twitter.png';
import Facebook from '../images/facebook.png';
import Insta from '../images/insta.png';
import Womens from '../Component/Womens'
import Brands from '../Component/Brands'
import Contact from '../Component/Contact'

function Footer() {
  return (
    <>
    <div className="conatiner-fluid overlay">
      <div className="footer-banner">
      <div className="vanity-logo">
        <img src={icon} />
      </div>
        <div className="footer-pera">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra morbi nisi, tortor quam integer id massa sed sociis. Tortor arcu lectus</p>
        </div>
        <div className="footer-items">
          <ul>
            <li><a href='/Vanity'>Women<i class="fa fa-angle-right" aria-hidden="true"></i></a></li>
            <li><a href='/Mens'>Men <i class="fa fa-angle-right" aria-hidden="true"></i></a></li>
            <li><a href='/Kids'>Kids <i class="fa fa-angle-right" aria-hidden="true"></i></a></li>
            <li><a href='/Brands'>Brands <i class="fa fa-angle-right" aria-hidden="true"></i> </a></li>
            <li><a href='/Contact'>Contact us <i class="fa fa-angle-right" aria-hidden="true"></i></a></li>
          </ul>
        </div>
        <div className="social-media">
          <ul>
            <li><a href="https://twitter.com/"><img src={Twitter}/></a></li>
            <li><a href="https://www.facebook.com/"><img src={Facebook}/></a></li>
            <li><a href="https://www.instagram.com/"><img src={Insta}/></a></li>
          </ul>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Footer;