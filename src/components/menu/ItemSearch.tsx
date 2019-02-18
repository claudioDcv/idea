import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface ItemProps {
}

function ItemSearch(props: ItemProps) {
  return (
    <div className="menu-item menu-item-search">
      <FontAwesomeIcon icon="search" />
    </div>
  );
}


export default ItemSearch;