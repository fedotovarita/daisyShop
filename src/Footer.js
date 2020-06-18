import React from 'react';
import './Footer.css';
import FooterLogo from './footer-logo.jpg'

class Footer extends React.Component {
  constructor(){
    super()
  }
  render (){
    return (
      <div className="section footer-section">
        <div className="columns">
          <div className="column footer-links">
            <ul className="footer-list">
              <li><a href="help.html">Help</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="contacs.html">Contacts</a></li>
            </ul>
          </div>
          <div className="column">
            <div className="file is-centered">
              <img src={FooterLogo} alt="DaisyShop"/>
              <p className="rights">© 2020 All Rights Reserved.</p>
            </div>
          </div>
          <div className="column footer-social-links">
            <ul className="footer-socialmedia">
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              <li><a href="#"><i className="fab fa-facebook"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Footer;
