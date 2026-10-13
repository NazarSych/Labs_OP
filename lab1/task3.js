'use strict'

const array = [true, 4, 'hello', 5, 12, 'fallenstar', -200, false, 'a', false, -100, 'word'];
const obj = { number: 0, string: 0, boolean: 0 }

for (const item of array) {
  const type = typeof item;
  obj[type]++;
}

console.log (obj);
