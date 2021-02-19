import React from 'react';
import zara from '../images/Vector.png'

const Home = () => {
    return (
        <>
       <section>
       <div className="header">
            <a href="https://www.google.com/" className="vanity" target="blank"/> 
         </div>
         <div className="container-fluid banner">
           <div className="row">
0            <div className="col-md-6"><h3 className="banner-content">WOMEN <br /> MEN <br />KIDS <br />BRANDS</h3></div>
            <div className="col-md-6">
                <input type="text" placeholder="SEARCH" className="vanity-input">
                  </input>
                <div><i className="fa fa-search vanity-search" aria-hidden="true"></i></div>
                <div className="zara">
              <img src={zara} /><br/><span>50% Off</span>
            </div> 
           </div>
          </div>
           
         </div>
       </section>
        </>
    )
}

export default Home;