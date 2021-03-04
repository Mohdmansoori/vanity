import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Puma from '../images/image 30.png'
import Jones from '../images/image 27.png'
import Ralph from '../images/image 28.png'
import Armani from '../images/image 29.png'
import Nike from '../images/image 31.png'
const Mens = () => {
    var settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      }
    return (
        <>
            <section>
            <Slider {...settings}>
                <div className="container-fluid mans-banner">
                    <div className="row">
                        <div className="col-md-6 brand">
                        <Link to="/Home"><h1>Home</h1></Link>
                            <Link to="/Womens"><h1>WOMAN</h1></Link>
                            <Link to="/Mens"><h1 className="Man-banner">MAN</h1></Link>
                            <Link to="/Kids"><h1>KIDS</h1></Link>
                            <Link to="/Brands"><h1>BRANDS</h1></Link>
                        </div>
                        <div className="col-md-6">
                           
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="Ultimate">
                            <h1>ULTIMATE SOPHISTICATION</h1>
                            <h3>Unique style matchless look</h3>
                        </div>

                    </div>
                </div>
                <div className="container-fluid mans-banner1">
                    <div className="row">
                        <div className="col-md-6 brand">
                        <Link to="/Home"><h1>Home</h1></Link>
                            <Link to="/Womens"><h1>WOMAN</h1></Link>
                            <Link to="/Mens"><h1 className="Man-banner">MAN</h1></Link>
                            <Link to="/Kids"><h1>KIDS</h1></Link>
                            <Link to="/Brands"><h1>BRANDS</h1></Link>
                        </div>
                        <div className="col-md-6">
                            
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="Ultimate1">
                            <h1>NEW SEASON NEW SUIT</h1>
                            
                        </div>

                    </div>
                </div>
                </Slider>
                <div className="container brands-section">
                    <h3>Brands you love</h3>
                    <div className="row">
                        <div className="col-md-6 text-right"><img src={Puma} /></div>
                        <div className="col-md-6"><img src={Nike} /></div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 text-right"><img src={Jones} /></div>
                        <div className="col-md-4 text-center"><img src={Ralph} /></div>
                        <div className="col-md-4 text-left"><img src={Armani} className="Emporio" /></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Mens;