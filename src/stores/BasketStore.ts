import {makeObservable, action, observable, computed, toJS} from 'mobx';
import { Product } from './ProductStore';

const basketStore =  observable({
  itemList: [],
  totalPrice: 0,

  updateItem(item: Product) {
    const found = this.getItems.findIndex((el)=>el.id === item.id);
    // console.log("found:" + found);
    if(found >= 0)
      this.itemList[found].choice++;
    else
      this.itemList = [...this.itemList, item];

    console.log("itemList:"+JSON.stringify(this.getItems));
    this.setTotalPrice();
  },

  returnItem(id: number) {
    let isZero = false;
    this.itemList = this.itemList.map((item) => {
      if(item.id === id) {
        if(item.choice > 1) {
          item.choice--;
        } else {
          isZero = true;
        }
      }
      return item;
    })
    
    if(isZero) {
      this.removeItem(id);
    } else {
      this.setTotalPrice();
    }
    
  },

  removeItem(id: number) {
    const idx = this.itemList.findIndex(el=>el, id===id);
    this.itemList.splice(idx, 1);
    
    this.setTotalPrice();
  },

  setTotalPrice() {
    if(this.itemList.length === 0) this.totalPrice = 0;
    
    this.itemList.reduce((acc: number, current: Product) => {
      const totalPrice = acc + (current.price * current.choice);
      this.totalPrice = totalPrice
      return totalPrice;
    }, 0)
  },


  get getItems() {
    return toJS(this.itemList);
  },

  get getTotalPrice() {
    return toJS(this.totalPrice);
  }

});

export { basketStore };