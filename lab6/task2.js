'use strict';

const increment = (x) => x + 1;
const double = (x) => x * 2;
const cube = (x) => x ** 3;

const compose = (...functions) => {
  const handlers = [];

  const run = (value) => {
    let result = value;

    try {
      for (let i = functions.length - 1; i >= 0; i--) {
        const fn = functions[i];
        result = fn(result);
      }
    } catch (error) {
      for (const handler of handlers.slice()) {
        handler(error);
      }

      return undefined;
    }

    return result;
  };

  run.on = (event, handler) => {
    if (event === 'error') {
      handlers.push(handler);
    }

    return run;
  };

  return run;
};

console.log(compose(increment, double, cube)(5));
