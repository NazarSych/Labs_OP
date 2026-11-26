'use strict';

const runSequence = (functions, value) => {
  if (typeof value !== 'number') {
    return seq(...functions, value);
  }
  let result = value;
  for (let i = functions.length - 1; i >= 0; i--) {
    const fn = functions[i];
    result = fn(result);
  }
  return result;
};
const seq = (...fns) => (value) => {
  return runSequence(fns, value);
};
const addSeven = (x) => x + 7;
const double = (x) => x * 2;

console.log(seq(addSeven)(double)(5));
