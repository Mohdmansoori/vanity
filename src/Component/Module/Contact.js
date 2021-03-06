import React from 'react';
import { Link } from 'react-router-dom';
import Map from '../../images/map.png'

const Contact = () => {
    return (
        <>
            <section>
                <div className="container-fluid Contact-banner">
                    <div className="row">
                        <div className="col-md-6 brand">
                            <Link to="/Home"><h1>Home</h1></Link>
                            <Link to="/Womens"><h1>WOMAN</h1></Link>
                            <Link to="/Mens"><h1>MAN</h1></Link>
                            <Link to="/Kids"><h1>KIDS</h1></Link>
                            <Link to="/Brands"><h1>BRANDS</h1></Link>
                        </div>
                        <div className="col-md-6">
                            <input type="text" placeholder="SEARCH" className="vanity-input" />
                            <i className="fa fa-search vanity-search" aria-hidden="true" />
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="Ultimate">
                            <h1>A BRAND NEW ARRIVAL</h1>
                            <h3>Unique style matchless elegance</h3>
                        </div>
                    </div>
                </div>
                <div className="conatiner text-center social-media-icon">
                    <div className="col-md-3">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        <h6>Location</h6>
                        <p>4373  Dovetail Drive, Auburn 48611</p>
                    </div>
                    <div className="col-md-3">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                        <h6>Phone</h6>
                        <p>847-361-1766</p>
                        <p>847-361-1766</p>
                    </div>
                    <div className="col-md-3">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                        <h6>E-mail</h6>
                        <p>support1@email.com</p>
                        <p>support1@email.com</p>
                    </div>
                    <div className="col-md-3">
                        <i class="fa fa-clock-o" aria-hidden="true"></i>
                        <h6>Working Hours</h6>
                        <p>Sunday - Thursday <br />10:00 AM - 5:00 PM</p>
                    </div>
                </div>
                <div className="container-fluid"></div>
                <img src={Map} className="map-image" />
                <div className="container text-center form">
                    <h4>Send Massege</h4>
                    <input type="text" placeholder="Your Name" className="your-name" />
                    <span><input type="text" placeholder="Your Email" className="your-mail"/></span>
                    <div>
                        <input type="text" placeholder="Message" className="your-massage"/>
                    </div>
                    <div className="submit-btn">
                        <button className="submit">Submit</button>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Contact;