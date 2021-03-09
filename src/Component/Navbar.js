import React from 'react';
import { Link } from 'react-router-dom';
import Insta from '../images/insta.png';
import Facebook from '../images/facebook.png';
import Youtube from '../images/youtube.png';
import Bell from '../images/bell.png';

const Navbar = () => {
    return (
        <>
            <section>
                <div className="container-fluid header">
                    <div className="Social-media-header">
                    <Link to="https://www.instagram.com"><img src={Insta}/></Link>
                   <Link to="https://www.facebook.com/"><img src={Facebook} className="social-facebook"/></Link>
                   <Link to="https://www.youtube.com/"><img src={Youtube} className="social-youtube"/></Link>
                   <Link to="https://www.snapchat.com/" ><img src={Bell} className="social-bell"/></Link>
                    </div>
                    <Link to={'/Womens'} className="vanity"></Link>
                </div>
            </section>
        </>
    )
}

export default Navbar;