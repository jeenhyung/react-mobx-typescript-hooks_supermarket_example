import React from 'react';
import { observer } from "mobx-react";
import useStore from '../stores/useStore';
import BasketItem from './BasketItem';

const BasketItemList = observer(() => {
  const {productStore, basketStore} = useStore();
  
  
  // alert(JSON.stringify(store.productStore));
  const onTake = (id) => {    
    basketStore.returnItem(id)
  }

  const itemList = basketStore.getItems.map((item) => (
    <BasketItem 
      item={item}
      key={item.name}
      onTake={onTake} 
    />
  ));

  // alert("basketlist:"+JSON.stringify(itemList));

  return (
    <div>{itemList}</div>
  )
});

export default BasketItemList;