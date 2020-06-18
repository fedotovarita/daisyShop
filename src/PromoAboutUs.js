import React from 'react';
import './PromoAboutUs.css';

class PromoAboutUs extends React.Component {
  constructor(){
    super()
  }
  render (){
    return (
      <div className="section two">
        <div className="columns">
          <div className="column is-3">
          </div>
          <div className="column is-6">
            <div className="about-us">
              <section className="hero">
                <a>
                <div className="hero-body is-paddingless">
                  <div className="container has-text-centered">
                    <p className="title-about">
                      ABOUT US
                    </p>
                  </div>
                </div>
                </a>
              </section>
              <span className="store-description"> <p>Daisy flower shop has remained focused on providing a high quality shopping experience, with exceptional customer service, and a unique variety of plant products. Our goal is to provide each customer with a shopping experience that provides everything necessary to create your ideal aesthetic. Our mission has always been about bringing the the natural world a little closer, once more, to the modern world. Let us help you and your family get re-connected to the sweet wonders of the natural world.</p></span>
            </div>
            <div className="column is-3">
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PromoAboutUs;
