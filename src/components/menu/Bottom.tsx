import * as React from 'react';
import { ItemCategory } from './ItemCategory';
import Item from './Item';
import ItemSearch from './ItemSearch';

export interface BottomProps {
}

export interface BottomState {
}

export default class Bottom extends React.Component<BottomProps, BottomState> {
  constructor(props: BottomProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <div className="menu-bottom">
        <div className="menu-container">
            <ItemCategory />
            <Item>Electro y Hogar</Item>
            <Item>Belleza</Item>
            <Item>Infantil</Item>
            <Item>Estadías</Item>
            <Item>Cine</Item>
            <Item>Gift Card</Item>
            <Item>Entretención</Item>
            <Item>Servicios</Item>
            <ItemSearch />
        </div>
      </div>
    );
  }
}
