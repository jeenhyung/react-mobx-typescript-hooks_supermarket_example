import {makeObservable, action, observable, computed, toJS} from 'mobx';
import RootStore from './rootStore';

export default class Counter{
  
  number: number = 1

  constructor(rootStore: RootStore) {
    makeObservable(this, {
      number: observable,
      increase: action,
      decrease: action,
      getNumber: computed,
    })
  }

  increase() {
    this.number++;
  }

  decrease() {
    this.number--;
  }

  get getNumber() {
    return this.number;
  }

}