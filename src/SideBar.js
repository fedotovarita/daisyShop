import React from 'react';
import './SideBar.css';
import { withRouter } from 'react-router-dom';
import Products from './Products';

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

import AugustPlanter from './august planter.jpg';
import BalboaPlanter from './balboa planter.jpg';
import DoloresPlanter from './dolores planter.jpg';
import Fertilizer from './fertilizer.jpg';
import OlmstedPlanter from './olmsted planter.jpg';
import PottingMix from './potting mix.jpg';
import ProspectPlanter from './prospect planter.jpg';
import WateringCan from './watering can.jpg';
import CactiMix from './cacti mix.jpg';

const leafy = [
  {
    name: 'monstera',
    image: Monstera,
    type: 'trending',
  },
  {
    name: 'dieffenbachia',
    image: Dieffenbachia,
    type: 'patterned',
  },
  {
    name: "calathea ruttlesnake",
    image: Calathea,
    type: 'patterned',
  },
  {
    name: 'snake plant',
    image: SnakePlant,
    type: 'patterned',
  },
  {
    name: 'large marble pothos',
    image: LargeMarblePothos,
    type: 'cascading',
  },
  {
    name: 'philodendron',
    image: Philodendron,
    type: 'cascading',
  },
  {
    name: 'chameadorea',
    image: Chameadorea,
    type: 'trending',
  },
  {
    name: 'marble queen pothos',
    image: MarbleQueenPothos,
    type: 'patterned',
  },
  {
    name: 'faux pothos',
    image: FauxPothos,
    type: 'cascading',
  },
]
const pots = [
  {
    name: 'balboa planter',
    image: BalboaPlanter,
    type: 'pots',
  },
  {
    name: 'august planter',
    image: AugustPlanter,
    type: 'pots',
  },
  {
    name: 'dolores planter',
    image: DoloresPlanter,
    type: 'pots',
  },
  {
    name: 'olmsted planter',
    image: OlmstedPlanter,
    type: 'pots',
  },
  {
    name: 'prospect planter',
    image: ProspectPlanter,
    type: 'pots',
  },
  {
    name: 'fertilizer',
    image: Fertilizer,
    type: 'accessories',
  },
  {
    name: "potting mix",
    image: PottingMix,
    type: 'accessories',
  },
  {
    name: 'watering can',
    image: WateringCan,
    type: 'accessories',
  },
  {
    name: "cacti mix",
    image: CactiMix,
    type: 'accessories',
  },
]
const succulents = [
  {
    name: 'aloe oik',
    image: AloeOik,
    type: 'rare',
  },
  {
    name: 'aloe vera',
    image: AloeVera,
    type: 'succulent',
  },
  {
    name: "crassula",
    image: Crassula,
    type: 'succulent',
  },
  {
    name: 'gasteria little warty',
    image: GasteriaLittle,
    type: 'rare',
  },
  {
    name: 'opuntia',
    image: Opuntia,
    type: 'cacti',
  },
  {
    name: 'mammilaria',
    image: Mammilaria,
    type: 'cacti',
  },
  {
    name: 'gymnocalycium moon',
    image: GymnocalyciumMoon,
    type: 'cacti',
  },
  {
    name: "burro's tail",
    image: BurrosTail,
    type: 'succulent',
  },
  {
    name: 'blue star',
    image: BlueStar,
    type: 'succulent',
  },
]

const leafyFilters = ['patterned', 'trending', 'cascading']
const succulentsFilters = ['succulent', 'cacti', 'rare']
const potsFilters = ['pots', 'accessories']

class SideBar extends React.Component {
  constructor(){
    super()
    this.state = {
      title: '',
      products: [],
      filteredProducts: [],
      filters: [],
      category: '',
    }
    this.handleFilter = this.handleFilter.bind(this);
  };

  static getDerivedStateFromProps (nextProps, prevState) {
    console.log('New Props received', nextProps)

    let category = nextProps.match.params.category;
    let newState = {};

    if (category === 'leafy_plants') {
      newState.title = 'leafy plants';
      newState.products = leafy;
      newState.filters = leafyFilters;
    } else if (category === 'succulents') {
      newState.title = 'succulents';
      newState.products = succulents;
      newState.filters = succulentsFilters;
    } else if (category === 'pots_accessories') {
      newState.title = 'pots & accessories';
      newState.products = pots;
      newState.filters = potsFilters;
    }
    newState.category = category;
    if (prevState.category != category) {
      newState.filteredProducts = [];
    }

    return newState;
  }

  handleFilter (filter) {
    var result = this.state.products.filter((item) => item.type === filter);
    this.setState({filteredProducts: result});
  }

  render () {
    const filters = this.state.filters.map((item, index) => {
      return (
        <li key={index}>
          <a onClick={() => this.handleFilter(item)}>
            {item}
          </a>
        </li>
      );
    })

    const products = (this.state.filteredProducts.length != 0)
      ? this.state.filteredProducts
      : this.state.products;

    return <div className="section">
      <div className="columns">
        <div className="column is-2">
          <aside className="menu">
            <p className="menu-label">
              filter
            </p>
            <ul className="menu-list">
              {filters}
            </ul>
          </aside>
        </div>
        <Products
          products={products}
          title={this.state.title}
        />
        <div className="column is-2">
        </div>
      </div>
    </div>
  }
}
export default withRouter(SideBar);
