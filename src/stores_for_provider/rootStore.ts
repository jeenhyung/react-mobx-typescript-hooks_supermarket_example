import BasketStore from './BasketStore';
import ProductStore from './ProductStore';
import Counter from './Counter';

export default class RootStore {
  constructor() {
    this.basketStore = new BasketStore(this);
    this.productStore = new ProductStore(this);
    this.counter = new Counter(this);
  }

  basketStore: BasketStore;
  productStore: ProductStore;
  counter: Counter;
}

