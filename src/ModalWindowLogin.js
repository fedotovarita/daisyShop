import React from 'react';
import './ModalWindowLogin.css';

class ModalWindowLogin extends React.Component {
  constructor(){
    super()
  }
  isActive () {
    return this.props.isModalOpen ? 'is-active ' : '';
  }
  render (){
    return (
      <div className={this.isActive() + 'modal'} id="modal">
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="modal-card">
            <header className="modal-card-head has-background-white-ter">
              <p className="modal-card-title">Log in to your account</p>
              <button className="delete" aria-label="close" id="close" onClick={this.props.toggleModal}></button>
            </header>
            <section className="modal-card-body">
              <div className="field">
                <p className="control has-icons-left has-icons-right">
                <input className="input" type="email" placeholder="Email"/>
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span>
                </p>
              </div>
              <div className="field">
                <p className="control has-icons-left">
                <input className="input" type="password" placeholder="Password"/>
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
                </p>
              </div>
            </section>
            <footer className="modal-card-foot">
              <div className="field is-grouped">
                <p className="control">
                <button className="button is-success is-primary">
                Login
                </button>
                </p>
                <p className="control">
                <button className="button is-dark">
                Sign up
                </button>
                </p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    )
  }
}

export default ModalWindowLogin;
