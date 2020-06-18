import React from 'react';
import './SideBar.css';
import ModalWindowLogin from './ModalWindowLogin';
import MyImage from './logo.png'

class SideBar extends React.Component {
  constructor(){
    super()
    };
    render (){
      return <div className="section">
        <div className="columns">
          <div className="column is-2">
            <aside className="menu">
              <p className="menu-label">
                plant type
              </p>
              <ul className="menu-list">
                <li><a>patterned</a></li>
                <li><a>trending</a></li>
                <li><a href="#">trailing</a></li>
              </ul>
            </aside>
          </div>
          {this.props.children}
          <div className="column is-2">
          </div>
        </div>
      </div>
  }
}
export default SideBar;
