import React from 'react';

const About = () => {
    return (
        <>
        <section>
            <div className="container-fluid About-banner">
              <div className="about text-center">
                  <h1>ABOUT US</h1>
                  <p>Know about our lorem ipsum</p>
              </div>
            </div>
            <div className="About-us-content text-center">
                <h3>Who we are?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar arcu massa nisi, ultricies. 
                Lorem pellentesque mattis tempus faucibus tortor, eget sed quam commodo. 
                Faucibus tellus sed et leo mattis. </p>
            </div>
            <div className="container-fluid About-banner1">
                <div className="container cards">
                    <h3>Lorem Ipsum</h3>
                    <div className="row">
                        <div className="col-md-4">
                            <h5>1.<span>International</span></h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                 Pulvinar arcu massa nisi, ultricies.</p>
                        </div>
                        <div className="col-md-4">
                        <h5>2.<span> Original</span></h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                 Pulvinar arcu massa nisi, ultricies.</p>
                        </div>
                        <div className="col-md-4">
                        <h5>3.<span>Affordable</span></h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                 Pulvinar arcu massa nisi, ultricies.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default About;