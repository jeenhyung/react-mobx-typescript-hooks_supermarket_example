import React from 'react';
import { observer } from "mobx-react";
import useStore from '../stores/useStore';
import ShopItem from './ShopItem';

// const items = [
//   {
//     id: 1,
//     name: '생수',
//     price: 850,
//     choice: 1,
//   },
//   {
//     id: 2,
//     name: '신라면',
//     price: 900,
//     choice:2
//   },
//   {
//     id: 3,
//     name: '포카칩',
//     price: 1500,
//     choice: 1,
//   },
//   {
//     id: 4,
//     name: '새우깡',
//     price: 1000,
//     choice: 1,
//   },
// ];

const ShopItemList = observer(({}) => {

  
  const { productStore, basketStore } = useStore();

  const updateBasket = (item) => { 
    // alert(JSON.stringify(item));   
    basketStore.updateItem(item);
  }

  const itemList = productStore.productList.map(
    (item) => 
      <ShopItem 
        {...item} 
        key={item.name} 
        onPut={updateBasket} 
    />);
  return (
    <div>{itemList}</div>
  )
});

export default ShopItemList;







// import React from 'react';
// import { observer, inject } from "mobx-react";
// import { Product } from '../stores/ProductStore';
// import RootStore from '../stores/rootStore';
// import ShopItem from './ShopItem';

// // const items = [
// //   {
// //     id: 1,
// //     name: '생수',
// //     price: 850,
// //     choice: 1,
// //   },
// //   {
// //     id: 2,
// //     name: '신라면',
// //     price: 900,
// //     choice:2
// //   },
// //   {
// //     id: 3,
// //     name: '포카칩',
// //     price: 1500,
// //     choice: 1,
// //   },
// //   {
// //     id: 4,
// //     name: '새우깡',
// //     price: 1000,
// //     choice: 1,
// //   },
// // ];


// const ShopItemList = (props) => {
  
//   const { rootStore } = props;
  
//   const updateBasket = (item: Product) => { 
//     // alert(JSON.stringify(item));    
//     rootStore.basketStore.updateItem(item);
//   }

//   const itemList = rootStore.productStore.productList.map(
//     (item) => 
//       <ShopItem 
//         {...item} 
//         key={item.name} 
//         onPut={updateBasket} 
//     />);
//   return (
//     <div>{itemList}</div>
//   )
// };

// export default inject('rootStore')(observer(ShopItemList));

