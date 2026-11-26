'use strict';

const max = (matrix) => {
  let largest = -Infinity;
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      largest = Math.max(largest, row[j]);
    }
  }

  return largest;
};

console.log(max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
