import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Puma from '../../images/image 30.png'
import Jones from '../../images/image 27.png'
import Ralph from '../../images/image 28.png'
import Armani from '../../images/image 29.png'
import Nike from '../../images/image 31.png'

const Kids = () => {
    var settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1 
      }
      var settings1 = {
        dots: false,
        infinite: true,
        speed: 600,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1
    };
      
    return (
        <>
            <section>
            <Slider {...settings}>
                <div className="container-fluid Kids-banner">
                    <div className="row">
                        <div className="col-md-6 brand">
                            <Link to="/Womens"><h1>WOMAN</h1></Link>
                            <Link to="/Mens"><h1>MAN</h1></Link>
                            <Link to="/Kids"><h1 className="Kid-banner">KIDS</h1></Link>
                            <Link to="/Brands"><h1>BRANDS</h1></Link>
                        </div>
                        <div className="col-md-6">
                          
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="Ultimate">
                            <h1>A BRAND NEW ARRIVAL</h1>
                            <h3>Unique style matchless elegance</h3>
                        </div>

                    </div>
                </div>
                <div className="container-fluid Kids-banner1">
                    <div className="row">
                        <div className="col-md-6 brand">
                            <Link to="/Womens"><h1>WOMAN</h1></Link>
                            <Link to="/Mens"><h1>MAN</h1></Link>
                            <Link to="/Kids"><h1 className="Kid-banner">KIDS</h1></Link>
                            <Link to="/Brands"><h1>BRANDS</h1></Link>
                        </div>
                        <div className="col-md-6">
                           
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="Ultimate">
                            <h1>A BRAND NEW ARRIVAL</h1>
                            <h3>Unique style matchless elegance</h3>
                        </div>

                    </div>
                </div>
                </Slider>
                <div className="container brands-section">
                    <h3>Brands you love</h3>
                    <div className="container text-center ">
                    <Slider {...settings1}>
                        <div className="brands-slider text-center">
                            <img src={Jones} className="" />
                        </div>
                        <div className="text-center">
                            <img src={Ralph} className="Slider-ralph" />
                        </div>
                        <div className="text-center">
                            <img src={Armani} className="Slider-armani" />
                        </div>
                        <div className="text-center">
                            <img src={Nike} className="Slider-nike" />
                        </div>
                        <div className="text-center">
                            <img src={Puma} className="Slider-puma" />
                        </div>
                    </Slider>
                </div>
                </div>
            </section>
        </>
    )
}

export default Kids;