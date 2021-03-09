import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Puma from '../../images/image 30.png'
import Jones from '../../images/image 27.png'
import Ralph from '../../images/image 28.png'
import Armani from '../../images/image 29.png'
import Nike from '../../images/image 31.png'

const Brands = () => {
    var settings = {
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
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 brands">
                            <Link to="/Womens"><h1>WOMAN</h1></Link>
                            <Link to="/Mens"><h1>MAN</h1></Link>
                            <Link to="/Kids"><h1>KIDS</h1></Link>
                            <Link to="/Brands"><h1 className="Brands-brand" style={{color: "#FFFFFF"}}>BRANDS</h1></Link>
                        </div>
                        <div className="col-md-6">
            
                        </div>
                    </div>
                </div>
                <div className="container text-center ">
                    <Slider {...settings}>
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
            </section>
        </>
    )
}

export default Brands;