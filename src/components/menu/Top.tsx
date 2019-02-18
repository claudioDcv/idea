import * as React from 'react';

import LogoPng from '../../assets/logo.png';
import Item from './Item';
import { Button } from 'antd';

export interface TopProps {
}

export interface TopState {
}

export default class Top extends React.Component<TopProps, TopState> {
    constructor(props: TopProps) {
        super(props);

        this.state = {
        }
    }

    public render() {
        return (
            <div className="menu-top">
                <div className="menu-container">
                    <img src={LogoPng} alt="" className="menu-logo" />
                    <Item>¿Como Acumulo?</Item>
                    <Item>¿Como Canjeo?</Item>
                    <Item>Contacto</Item>
                    <div className="menu-top-buttons">
                        <Button type="primary">Cuantos Puntos Tengo</Button>
                        <Button type="primary">Iniciar Sesión</Button>
                        <Button className="button-secondary ml-5" type="primary">Incribete</Button>
                    </div>
                </div>
            </div>
        );
    }
}
