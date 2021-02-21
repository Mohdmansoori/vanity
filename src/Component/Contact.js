import React from 'react';

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
            </section>
        </>
    )
}

export default Contact;