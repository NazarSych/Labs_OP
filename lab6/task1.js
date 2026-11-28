'use strict';

const increment = (x) => x + 1;
const double = (x) => x * 2;
const cube = (x) => x ** 3;

const pipe = (...fns) => {
  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new TypeError('Аргумент має бути функцією');
    }
  }

  return (value) => {
    let result = value;
    for (const fn of fns) {
      result = fn(result);
    }

    return result;
  };
};

console.log(pipe(increment, double, cube)(5));
