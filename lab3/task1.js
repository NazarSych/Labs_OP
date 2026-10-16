'use strict'

const random = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }

  const number = Math.random() * (max - min + 1);
  return Math.floor(number) + min;
}

console.log(random(10))
