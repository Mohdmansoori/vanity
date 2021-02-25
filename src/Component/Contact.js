import React from 'react';
import Map from '../images/map.png'

const Contact = () => {
    return (
        <>
            <section>
                <div className="container-fluid Contact-banner">
                    <div className="row">
                        <div className="col-md-6 brand">
                            <h1>WOMEN</h1>
                            <h1>MEN</h1>
                            <h1>KIDS</h1>
                            <h1>BRAND</h1>
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
                <img src={Map} className="map-image"/>
                <div className="container text-center">
                    <h4>Send Massege</h4>
                     <input type="text" placeholder="Your Name" className="your-name"/>
                     <span><input type="text" placeholder="Your Email"/></span>
                     <div>
                     <input type="text" placeholder="Message"/>
                     </div>
                </div>

            </section>
        </>
    )
}

export default Contact;