import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import HomeItems from '../../components/home-items/HomeItems';
import Slid01Jpg from '../../assets/slide-01.jpg';
import Slid02Png from '../../assets/slider-02.png';

export interface HomeProps {
}

export interface HomeState {
}

export default class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);

        this.state = {
        }
    }

    public render() {
        return (
            <div>
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
            </div>
        );
    }
}
