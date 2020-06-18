import React from 'react';
import './index.css';
import MainLayout from './MainLayout';
import Home from './Home';
import SideBar from './SideBar';
import Products from './Products';
import Breadcrumbs from './Breadcrumbs';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render () {
    return (
      <MainLayout>
        <Switch>
          <Route path="/:category">
            <Breadcrumbs/>
            <SideBar>

            </SideBar>
          </Route>

          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </MainLayout>
    );

  }
}

export default App;
