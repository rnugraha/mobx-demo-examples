import { observable, reaction, autorun } from "mobx";

const counter = observable({ count: 0 });

// invoke once of and dispose reaction: reacts to obserbable value.
const reaction3 = reaction(
  () => counter.count,
  (count, reaction) => {
    console.log("reaction 3: invoked. counter.count = " + count);
    reaction.dispose();
  }
);

counter.count = 1;
// prints:
// reaction 3: invoked. counter.count = 1

counter.count = 2;
// prints:
// (There are no logging, because of reaction disposed. But, counter continue reaction)

console.log(counter.count);
// prints:
// 2
