import * as React from 'react';

export interface ItemProps {
    children: String | React.ReactNode,
}

function Item (props: ItemProps) {
    return (
      <div className="menu-item">
        {props.children}
      </div>
    );
}


export default Item;