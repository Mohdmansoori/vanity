import React from 'react';
import { Link } from 'react-router-dom';
import Puma from '../images/image 30.png'
import Jones from '../images/image 27.png'
import Ralph from '../images/image 28.png'
import Armani from '../images/image 29.png'
import Nike from '../images/image 31.png'

const Kids = () => {
    return (
        <>
            <section>
                <div className="container-fluid Kids-banner">
                    <div className="row">
                        <div className="col-md-6 brand">
                            <Link to="/Home"><h1>Home</h1></Link>
                            <Link to="/Womens"><h1>WOMAN</h1></Link>
                            <Link to="/Mens"><h1>MAN</h1></Link>
                            <Link to="/Kids"><h1 className="Kid-banner">KIDS</h1></Link>
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

export default Kids;