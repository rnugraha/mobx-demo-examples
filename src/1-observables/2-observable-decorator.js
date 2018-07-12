import { observable, computed, autorun } from "mobx";

/**
 * OrderLine is POJO
 */
class OrderLinePOJO {
  price = 0;
  amount = 1;

  constructor() {}

  showReport() {
    console.log(
      `Price is ${this.price} and you buy ${
        this.amount
      } items - Total order is ${this.total}`
    );
  }

  get total() {
    return this.price * this.amount;
  }
}

/**
 * Orderline as observable
 */
class OrderLine {
  @observable price = 0;
  @observable amount = 1;

  constructor() {
    autorun(() =>
      console.log(
        `Price is ${this.price} and you buy ${
          this.amount
        } items - Total order is ${this.total}`
      )
    );
  }

  @computed
  get total() {
    return this.price * this.amount;
  }
}

// const orderLinePOJO = new OrderLinePOJO();

// orderLinePOJO.price = 120;
// orderLinePOJO.showReport();
// orderLinePOJO.amount = 78;
// orderLinePOJO.showReport();

// const orderLine = new OrderLine();
// orderLine.price = 120;
// orderLine.amount = 78;
