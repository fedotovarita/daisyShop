import React from 'react';
import './Header.css';
import ModalWindowLogin from './ModalWindowLogin';
import MyImage from './logo.png';
import {Link} from 'react-router-dom';

class Header extends React.Component {
  constructor(){
    super()
    this.state = {isModalOpen: false};
  }
  toggleModal() {
    this.setState({isModalOpen: !this.state.isModalOpen});
  }
  render (){
    return (
      <div className="section">
        <div className="columns column-header">
          <div className="column">
            <ul className="options-first">
              <li className="option-btn"> <Link to="/leafy_plants">Leafy plants</Link></li>
              <li className="option-btn"> <Link to="/succulents">Succulents</Link></li>
              <li className="option-btn"> <Link to="/pots_accessories">Pots & Accessories</Link></li>
            </ul>
          </div>
          <div className="column">
            <div className="logo">
              <Link to="/"><img src={MyImage} className="logo-img" alt="Flower store Daisy" /></Link>
              <div className="logo-subscribe"><p className="subscribe">flower shop</p></div>
            </div>
          </div>
          <div className="column">
            <ul className="options-second">
              <li className="option-btn">
                <form className="search">
                  <input type="text" placeholder="looking for" />
                  <button className="search-btn" type="submit"> <i className="fas fa-search"></i> </button>
                </form>
              </li>
              <li className="option-btn">
                <a href="#" id="user" onClick={this.toggleModal.bind(this)}><i className="fas fa-user"></i></a>
              </li>
              <li className="option-btn">
                <a href="#"><i className="fas fa-shopping-basket"></i></a>
              </li>
            </ul>
        </div>
      </div>
      <ModalWindowLogin isModalOpen={this.state.isModalOpen} toggleModal={this.toggleModal.bind(this)}/>
    </div>
  );
  }
}
export default Header;
