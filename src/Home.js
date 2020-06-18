import React from 'react';
import Main_Logo from './Main_Logo';
import SectionTitle from './SectionTitle';
import FeaturedProducts from './FeaturedProducts';
import PromoAboutUs from './PromoAboutUs';

class Home extends React.Component {
  constructor(){
    super();
  }
  render (){
  return <div>
    <Main_Logo />
    <SectionTitle/>
    <FeaturedProducts />
    <PromoAboutUs/>
  </div>
  }
}
export default Home;
