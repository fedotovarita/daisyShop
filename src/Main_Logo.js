import React from 'react';
import './Main_Logo.css';

class Main_Logo extends React.Component {
  constructor(){
    super()
  }
  render (){
    return (
      <div className="section greet">
        <div className="columns">
          <div className="column is-two-thirds">
            <section className="hero">
              <div className="hero-body">
                <div className="container">
                  <h1 className="title">
                    WELCOME TO
                  </h1>
                  <h2 className="subtitle">
                    THE DAISY FLOWER SHOP
                  </h2>
                  <button type="button" name="button" className="button is-light is-large">shop now</button>
                </div>
              </div>
            </section>
          </div>
          <div className="column">
          </div>
        </div>
      </div>
    )
   }
 }

  export default Main_Logo;
