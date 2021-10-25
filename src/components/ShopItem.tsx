
import React from 'react';
import { observer } from "mobx-react";
import '../css/ShopItem.css';

// const Market = () => {
//   return <MarketTemplate items={<ShopItemList />} 
//     // basket={null}
//     // total={null} 
//   />;
// };

// export default Market;

const ShopItem = observer(({ id, name, price, choice, onPut }) => (
  <div 
    className="ShopItem" 
    onClick={() => onPut( {id, name, price, choice} )}>
    <h4>{name}</h4>
    <div>{id}</div>
    <div>{price}원</div>
    <div>{choice}쵸이스</div>
  </div>
));

export default ShopItem;