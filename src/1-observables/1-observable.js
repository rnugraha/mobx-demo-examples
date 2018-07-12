import { observable } from "mobx";

// ============================ //
// Some examples of observables //
// ============================ //

// observable.map
const map = observable.map({ key: "value" });
map.set("key", "new value");

// observable.array
const list = observable([1, 2, 4]);
// console.log(list);

list[2] = 3;
//console.log(list);

// class Person {
//   firstName: string;
//   lastName: string;
// }

class Person {
  @observable firstName: string;
  @observable lastName: string;
}

let personByClass = observable(new Person());
console.log(personByClass.firstName);

// observable.object
const person = observable({
  firstName: "Clive Staples",
  lastName: "Lewis"
});

console.log(person.firstName);
// person.firstName = "C.S.";

// observable primitive value
const temperature = observable.box(20);
// console.log(temperature);
temperature.set(25);
