import * as React from 'react';
import { ItemCategory } from './ItemCategory';
import Item from './Item';
import ItemSearch from './ItemSearch';
import SubMenu from './SubMenu';

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
          <Item>
            <span>Productos</span>
            <SubMenu>
              <li>Electro</li>
              <li>Tecnología</li>
              <li>Línea Blanca</li>
              <li>Electro</li>
            </SubMenu>
          </Item>
          <Item>
            <span>Viajes</span>
            <SubMenu>
              <li>Electro</li>
              <li>Tecnología</li>
              <li>Línea Blanca</li>
              <li>Electro</li>
              <li>Electro</li>
            </SubMenu>
          </Item>
          <Item>Gift Card</Item>
          <Item>Entretención</Item>
          <Item>Descuentos</Item>
          <Item>Servicios</Item>
          <ItemSearch />
        </div>
      </div>
    );
  }
}
