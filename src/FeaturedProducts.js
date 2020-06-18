import React from 'react';
import './FeaturedProducts.css';
import AloeVera from './aloe vera.jpg';
import Dieffenbachia from './dieffenbachia.jpg';
import BurrosTail from './burros tail.jpg';
import SnakePlant from './snake plant.jpg';
import BlueStar from './blue star.jpg';
import Chameadorea from './chameadorea.jpg';

class FeaturedProducts extends React.Component {
  constructor(){
    super();
    this.state = {
      products: [
        {
          name: 'aloe vera',
          image: AloeVera,
        },
        {
          name: 'dieffenbachia',
          image: Dieffenbachia,
        },
        {
          name: "burro's tail",
          image: BurrosTail ,
        },
        {
          name: 'snake plant',
          image: SnakePlant,
        },
        {
          name: 'blue star',
          image: BlueStar,
        },
        {
          name: 'chameadorea',
          image: Chameadorea,
        },
      ]
    }
  }
  render (){
    const product = this.state.products.map((item, index) => {
      return (
      <div className="column is-one-third is-half-tablet" key={index}>
        <div className="card">
          <div className="card-image">
            <div className="content-img image 1by1">
              <img src={item.image} alt={item.name} />
              <div className="photo-button">
                <button type="button" name="to-bag">
                <i className="fas fa-shopping-basket"></i>
                </button>
              </div>
              <div className="info">
                <div className="info-subscription">
                  <span>{item.name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
    });
    return (
      <div className="section">
        <div className="columns">
          <div className="columns is-multiline">
            {product}
          </div>
        </div>
      </div>
)
}
}
export default FeaturedProducts;
