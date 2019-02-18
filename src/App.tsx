import React, { Component } from 'react';
import { Button, Layout } from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Slid01Jpg from './assets/slide-01.jpg';
import Slid02Png from './assets/slider-02.png';

import Menu from './components/menu/Main';
import './App.css';
import HomeItems from './components/home-items/HomeItems'; import Footer from './components/footer/Footer';
import Home from './views/home/Home';
import ProductDetail from './views/product-detail/ProductDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/producto/:product" component={ProductDetail} />
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
