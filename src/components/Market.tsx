import React from 'react';
import Product from './Product';
import ShopItemList from './ShopItemList';
import BasketItemList from './BasketItemList';
import TotalPrice from './TotalPrice';

const Market = () => {
  
  return <Product 
    items={<ShopItemList />} 
    basket={<BasketItemList />}
    total={<TotalPrice />} 
    />;
};

export default Market;