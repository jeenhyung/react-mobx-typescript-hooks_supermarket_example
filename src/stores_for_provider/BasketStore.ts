import {makeObservable, action, observable, computed, toJS} from 'mobx';
import {Product} from './ProductStore';
import RootStore from './rootStore';

export default class BasketStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeObservable(this, {
      itemList: observable,
      totalPrice: observable,
      updateItem: action,
      returnItem: action,
      removeItem: action,
      setTotalPrice: action,
      getItems: computed,
      getTotalPrice: computed,
    });
    
  }

  itemList: Product[] = [];
  totalPrice: number = 0;

  updateItem(item: Product) {
    const found = this.getItems.findIndex((el)=>el.id === item.id);
    // console.log("found:" + found);
    if(found >= 0)
      this.itemList[found].choice++;
    else
      this.itemList = [...this.itemList, item];

    console.log("itemList:"+JSON.stringify(this.getItems));
    this.setTotalPrice();
  }

  returnItem(id: number) {
    this.itemList = this.itemList.map((item) => {
      if(item.id === id) 
        item.choice--;
      return item;
    })
    
    this.setTotalPrice();
  }

  removeItem(id: number) {
    const idx = this.itemList.findIndex(el=>el, id===id);
    this.itemList.splice(idx, 1);
    
    this.setTotalPrice();
  }

  setTotalPrice() {
    this.itemList.reduce((acc: number, current: Product) => {
      return acc + (current.price * current.choice);
    }, 0)
  }


  get getItems() {
    return toJS(this.itemList);
  }

  get getTotalPrice() {
    return toJS(this.totalPrice);
  }
}