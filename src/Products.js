import React from 'react';
import './Products.css';
import { withRouter } from 'react-router-dom';


import Monstera from './monstera.jpg';
import FauxPothos from './faux pothos.jpg';
import Calathea from './calathea ruttlesnake.jpg';
import LargeMarblePothos from './large marble pothos.jpg';
import MarbleQueenPothos from './marble queen pothos.jpg';
import Philodendron from './philodendron green.jpg';
import Chameadorea from './chameadorea.jpg';
import Dieffenbachia from './dieffenbachia.jpg';
import SnakePlant from './snake plant.jpg';


import AloeOik from './aloe oik.jpg';
import AloeVera from './aloe vera.jpg';
import BlueStar from './blue star.jpg';
import Crassula from './crassula.jpg';
import GasteriaLittle from './gasteria li.jpg';
import BurrosTail from './burros tail.jpg';
import GymnocalyciumMoon from './gymnocalycium moon.jpg';
import Mammilaria from './mammilaria.jpg';
import Opuntia from './opuntia.jpg';

const leafy = [
  {
    name: 'monstera',
    image: Monstera,
  },
  {
    name: 'dieffenbachia',
    image: Dieffenbachia,
  },
  {
    name: "calathea ruttlesnake",
    image: Calathea,
  },
  {
    name: 'snake plant',
    image: SnakePlant,
  },
  {
    name: 'large marble pothos',
    image: LargeMarblePothos,
  },
  {
    name: 'philodendron',
    image: Philodendron,
  },
  {
    name: 'chameadorea',
    image: Chameadorea,
  },
  {
    name: 'marble queen pothos',
    image: MarbleQueenPothos,
  },
  {
    name: 'faux pothos',
    image: FauxPothos,
  },
]
const succulents = [
  {
    name: 'aloe oik',
    image: AloeOik,
  },
  {
    name: 'aloe vera',
    image: AloeVera,
  },
  {
    name: "crassula",
    image: Crassula,
  },
  {
    name: 'gasteria little warty',
    image: GasteriaLittle,
  },
  {
    name: 'opuntia',
    image: Opuntia,
  },
  {
    name: 'mammilaria',
    image: Mammilaria,
  },
  {
    name: 'gymnocalycium moon',
    image: GymnocalyciumMoon,
  },
  {
    name: "burro's tail",
    image: BurrosTail,
  },
  {
    name: 'blue star',
    image: BlueStar,
  },
]
const pots = []

class Products extends React.Component {
  constructor(props){
    super (props);
    this.state = {
      title: '',
      products: [],
  }
}


static getDerivedStateFromProps (nextProps) {
  let category = nextProps.match.params.category;

  if (category == 'leafy_plants'){
    return {
      title: 'leafy plants',
      products: leafy,
    };
  } else if (category == 'succulents'){
    return {
      title: 'succulents',
      products: succulents,
    };
  } else if (category == 'pots_accessories'){
    return {
      title: 'pots & accessories',
      products: pots,
    };
  } else {
    return null;
  }
}

render () {
  const products = this.state.products.map((item, index) => {
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
        <h1>{this.state.title}</h1>
      </div>
      <div className="columns is-multiline">
        {products}
      </div>
    </div>

)
}
}
export default withRouter(Products);
