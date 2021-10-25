import React, { useState } from 'react';
import { observer } from "mobx-react";
import '../css/MarketTemplate.css';

// const MarketTemplate = ({items}) => {
//   const [items, setItems] = useState([]);

//   return (
//     <div className="MarketTemplate">
//       <div className="Addproduct">
//         <h4>add</h4>
//         {/* addProduct */}
//       </div>
//       <div className="Market">
//         <div className="products-wrapper">
//           <h2>판매상품</h2>
//           {/* ProductList */}
//         </div>
//         <div className="basket-wrapper">
//           <h2>장바구니</h2>
//           {/* BasketList */}
//         </div>
//       </div>
      
//     </div>
//   )
// }

const MarketTemplate = observer(({ items, basket, total }) => {
  
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
          {/* BasketList */}
        </div>
      </div>
      
    </div>
)});

export default MarketTemplate;








// import React from 'react';
// import { observer } from "mobx-react";
// import MarketTemplate from './MarketTemplate';
// import ShopItemList from './ShopItemList';

// // const Market = () => {
// //   return <MarketTemplate items={<ShopItemList />} 
// //     // basket={null}
// //     // total={null} 
// //   />;
// // };

// // export default Market;

// const Market = observer(({ items }) => (
//   <MarketTemplate items={<ShopItemList />} 
//     // basket={null}
//     // total={null} 
//   />
// ));

// export default Market;