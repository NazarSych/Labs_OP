'use strict';

const baseTypes = [Number, String, Boolean, BigInt, Symbol];
const codeOf = (type) => Function.prototype.toString.call(type);

const isType = (value, type) => {
  const code = codeOf(type);

  for (const base of baseTypes) {
    if (code === codeOf(base)) {
      return typeof value === base.name.toLowerCase();
    }
  }

  return value instanceof type;
};

const check = (value, type, name) => {
  if (!isType(value, type)) {
    throw new TypeError(`${name} має бути типу ${type.name}`);
  }
};

const contract = (fn, ...types) => {
  if (typeof fn !== 'function' || types.length === 0) {
    throw new TypeError('Потрібно передати функцію і тип результату');
  }
  const outType = types.pop();

  return {
    run(...args) {
      if (args.length !== types.length) {
        throw new TypeError(`Очікувана кількість аргументів: ${types.length}`);
      }

      for (let i = 0; i < types.length; i++) {
        check(args[i], types[i], `Аргумент №${i + 1}`);
      }

      const res = fn.apply(this, args);
      check(res, outType, 'Результат');
      return res;
    },
  }.run;
};

const add = (a, b) => a + b;
const sum = contract(add, Number, Number, Number);
console.log(sum(2, 3));
