import React from 'react'
import { Link } from 'react-router-dom';
import Insta from '../images/insta.png';
import Facebook from '../images/facebook.png';
import Youtube from '../images/youtube.png';
import Bell from '../images/bell.png';
import logo from '../images/logo.png';
import Eng from '../images/Eng.png';
import Arb from '../images/Arb.png';
import Kurd from '../images/Kurd.png';

const Header = () => {
    return (
        <>
            <section>
                <div className="container-fluid header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 Header-social-media">
                                <Link to="https://www.instagram.com"><img src={Insta} /></Link>
                                <Link to="https://www.facebook.com/"><img src={Facebook} className="social-facebook" /></Link>
                                <Link to="https://www.youtube.com/"><img src={Youtube} className="social-youtube" /></Link>
                                <Link to="https://www.snapchat.com/" ><img src={Bell} className="social-bell" /></Link>
                            </div>
                            <div className="col-md-4 text-center">
                                <img src={logo} />
                            </div>
                            <div className="col-md-4 laguages">
                                <div className="dropdown">
                                <img src={Eng} className="dropdown"/><span>EN</span>
                                    <div className="dropdown-content">
                                        <Link to={'#'} ><img src={Arb} /><span>AR</span></Link>
                                       
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </section>
        </>
    )
}

export default Header;