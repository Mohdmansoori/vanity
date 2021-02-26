import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Puma from '../images/image 30.png'
import Jones from '../images/image 27.png'
import Ralph from '../images/image 28.png'
import Armani from '../images/image 29.png'
import Nike from '../images/image 31.png'

const Brands = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 brands">
                            <h1>WOMEN</h1>
                            <h1>MEN</h1>
                            <h1>KIDS</h1>
                            <h1 className="brand-page">BRAND</h1>
                        </div>
                        <div className="col-md-6">
                            <input type="text" placeholder="SEARCH" className="Brand-input" />
                            <i className="fa fa-search Brand-search" aria-hidden="true" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <Slider {...settings}>
                        <div className="brands-slider text-center">
                            <img src={Jones} className=""/>
                        </div>
                        <div>
                        <img src={Ralph} className="Slider-ralph"/>
                        </div>
                        <div>
                        <img src={Armani} className="Slider-armani"/>
                        </div>
                        <div>
                        <img src={Nike} className="Slider-nike"/>
                        </div>
                        <div>
                        <img src={Puma} className="Slider-puma"/>
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default Brands;