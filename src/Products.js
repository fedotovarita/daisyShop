import React from 'react';
import './Products.css';


class Products extends React.Component {
  constructor(props){
    super (props);
  }

  render () {
    const products = this.props.products.map((item, index) => {
      return (
        <div className="column is-one-third-desktop is-half-tablet" key={index}>
          <div className="card">
            <div className="card-image">
              <figure className="image is-1by1">
                <a href="#"><img src={item.image} alt={item.name} /></a>
              </figure>
            </div>
            <footer className="card-footer">
              <a className="card-footer-item">
                {item.name}
              </a>
            </footer>
            </div>
        </div>
      )
    });
    return (
      <div className="column">
        <div className="content is-large">
          <h1>{this.props.title}</h1>
        </div>
        <div className="columns is-multiline">
          {products}
        </div>
      </div>
    )
  }
}
export default Products;
