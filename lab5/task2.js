'use strict';

const array = () => {
  const items = [];

  const get = (index) => {
    return items[index];
  };
  get.push = (value) => items.push(value);
  get.pop = () => items.pop();

  return get;
};

const items = array();
items.push('first');
items.push('second');
items.push('third');

console.log(items(0));
console.log(items(1));
console.log(items(2));

console.log(items.pop());
console.log(items.pop());
console.log(items.pop());
console.log(items.pop());
