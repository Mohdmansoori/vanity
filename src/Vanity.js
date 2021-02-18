import React from 'react'
import zara from './images/Vector.png'

class Vanity extends React.Component {
    render (){
        return (
            <>
            <div className="header">
            <a href="https://www.google.com/" className="vanity" target="blank"/> 
         </div>
         <div className="container-fluid banner">
           <div className="row">
            <div className="col-md-6"><h3 className="banner-content">WOMEN <br /> MEN <br />KIDS <br />BRANDS</h3></div>
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
         </>
        )
    }
}

export default Vanity;