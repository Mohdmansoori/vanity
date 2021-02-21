import React from 'react';
 
const Brands = () => {
    return (
        <>
            <section>
                <div className="conatiner-fluid">
                   <div className="row">
                   <div className="col-md-6 brands">
                            <h1>WOMEN</h1>
                            <h1>MEN</h1>
                            <h1>KIDS</h1>
                            <h1>BRAND</h1>
                        </div>
                        <div className="col-md-6">
                            <input type="text" placeholder="SEARCH" className="Brand-input" />
                            <i className="fa fa-search Brand-search" aria-hidden="true" />
                        </div>
                   </div>
                </div>
                <div className="container">
            
                </div>
            </section>
        </>
    )
}

export default Brands;