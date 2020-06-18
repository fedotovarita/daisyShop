import React from 'react';
import './Breadcrumbs.css';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';


class Breadcrumbs extends React.Component {
  constructor(props){
    super (props);
    this.state = {
      title: ''
    }
  }
  static getDerivedStateFromProps (nextProps) {
    let category = nextProps.match.params.category;

    if (category == 'leafy_plants'){
      return {
        title: 'leafy plants',
      };
    } else if (category == 'succulents'){
      return {
        title: 'succulents',
      };
    } else if (category == 'pots_accessories'){
      return {
        title: 'pots & accessories',
      };
    } else {
      return null;
    }
  }

    render (){

    return (
      <div className="section is-paddingless for-crumbs">
        <nav className="breadcrumb is-small has-bullet-separator" aria-label="breadcrumbs">
          <ul className="breadcrumbs-ul">
            <li><Link to="/">Home</Link></li>
            <li className="is-active"><a href="#" aria-current="page">{this.state.title}</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default withRouter(Breadcrumbs);
