import React from 'react';
import './SideBar.css';
import ModalWindowLogin from './ModalWindowLogin';
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
const pots = [
  {
    name: 'balboa planter',
    image: BalboaPlanter,
  },
  {
    name: 'august planter',
    image: AugustPlanter,
  },
  {
    name: 'dolores planter',
    image: DoloresPlanter,
  },
  {
    name: 'olmsted planter',
    image: OlmstedPlanter,
  },
  {
    name: 'prospect planter',
    image: ProspectPlanter,
  },
  {
    name: 'fertilizer',
    image: Fertilizer,
  },
  {
    name: "potting mix",
    image: PottingMix,
  },
  {
    name: 'watering can',
    image: WateringCan,
  },
  {
    name: "cacti mix",
    image: CactiMix,
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

const leafyFilters = ['patterned', 'trending', 'trailing']
const succulentsFilters = ['succulent', 'cacti', 'rare']
const potsFilters = ['pots', 'accessories']

class SideBar extends React.Component {
  constructor(){
    super()
    this.state = {
      title: '',
      products: [],
      filters: [],
    }
  };

  static getDerivedStateFromProps (nextProps) {
    let category = nextProps.match.params.category;

    if (category == 'leafy_plants'){
      return {
        title: 'leafy plants',
        products: leafy,
        filters: leafyFilters,
      };
    } else if (category == 'succulents'){
      return {
        title: 'succulents',
        products: succulents,
        filters: succulentsFilters,
      };
    } else if (category == 'pots_accessories'){
      return {
        title: 'pots & accessories',
        products: pots,
        filters: potsFilters,
      };
    } else {
      return null;
    }
  }

  preventHandler (event) {
    event.preventDefault();

  }

  render () {
    const filters = this.state.filters.map((filter, index) => {
      return <li key={index}><a onClick={this.preventHandler.bind(this)}>{filter}</a></li>
    })

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
          products={this.state.products}
          title={this.state.title}
        />
        <div className="column is-2">
        </div>
      </div>
    </div>
  }
}
export default withRouter(SideBar);
