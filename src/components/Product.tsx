import React, { useState } from 'react';
import { observer } from "mobx-react";
import '../css/MarketTemplate.css';

const Product = observer(({ items, basket, total }) => {
  
  return (
    <div className="MarketTemplate">
      <div className="Addproduct">
        <h4>add</h4>
      </div>
      <div className="Market">
        <div className="products-wrapper">
          <h2>판매상품</h2>
          {items}
        </div>
        <div className="basket-wrapper">
          <h2>장바구니</h2>
          {basket}
          {total}
        </div>
      </div>
      
    </div>
)});

export default Product;







