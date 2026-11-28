'use strict';

const difference = (array1, array2) => {
  const isMissing = (item) => !array2.includes(item);

  return array1.filter(isMissing);
};

console.log(difference([7, -2, 10, 5, 0], [0, 10]));
