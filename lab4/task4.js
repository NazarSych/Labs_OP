const sum = (...args) => {
  let total = 0;
  let index = 0;
  do {
    total += args[index++];
  } while (index < args.length);
  return total;
};

console.log(sum(3, 2, 3, 8));
