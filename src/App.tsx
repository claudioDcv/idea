import React, { Component } from 'react';
import { Button, Layout } from 'antd';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Slid01Jpg from './assets/slide-01.jpg';
import Slid02Png from './assets/slider-02.png';

import Menu from './components/menu/Main';
import './App.css';
import HomeItems from './components/home-items/HomeItems';import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <div className="container mt-15">
          <Carousel
            showStatus={false}
            showThumbs={false}
            emulateTouch
            showArrows={true}
            infiniteLoop
            autoPlay
          >
            <div>
              <img src={Slid02Png} />
            </div>
            <div>
              <img src={Slid01Jpg} />
            </div>
            <div>
              <img src={Slid01Jpg} />
            </div>
          </Carousel>
        </div>
        <div className="container mt-20">
          <HomeItems />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
