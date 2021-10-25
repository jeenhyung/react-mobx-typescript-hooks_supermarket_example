import { productStore } from './ProductStore';
import { basketStore } from './BasketStore';

const useStore = () => {
  return { productStore, basketStore };
}

export default useStore;