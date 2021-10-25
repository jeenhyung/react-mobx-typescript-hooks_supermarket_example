
import React from 'react';
import { observer } from "mobx-react";
import '../css/BasketItem.css';

const BasketItem = observer(({ item, onTake }) => (
  <div className="BasketItem">
    <div className="name">{item.name}</div>
    <div className="price">{item.price}</div>
    <div className="choice">{item.choice}</div>
    <div className="return" onClick={() => onTake(item.id)}>갖다놓기</div>
  </div>
));

export default BasketItem;