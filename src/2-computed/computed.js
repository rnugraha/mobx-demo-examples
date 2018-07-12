import { observable, computed } from "mobx";

class OrderLine {
  @observable price = 0;
  @observable amount = 1;

  constructor(price) {
    this.price = price;
  }

  @computed
  get total() {
    return this.price * this.amount;
  }
}

const ol = new OrderLine();
ol.price = 100;
ol.amount = 92;
console.log(ol.total);
// print 9200