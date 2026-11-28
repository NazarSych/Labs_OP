'use strict';

const object = { a: 1, b: 2, c: 3 };

const iterate = (object, callback) => {
  const keys = Object.keys(object);

  for (const key of keys) {
    const value = object[key];
   callback(key, value, object);
  }
};

iterate(object, (key, value) => console.log({ key, value }));
