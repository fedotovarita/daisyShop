import React from 'react';
import './SectionTitle.css';


class SectionTitle extends React.Component {
  constructor(){
    super();
  }
  render (){
    return (
      <section className="hero">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-1">
              FEATURED PRODUCTS
            </h1>
          </div>
        </div>
      </section>
    )
  }
}

export default SectionTitle;
