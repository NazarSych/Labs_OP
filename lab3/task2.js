'use strict'

const generateKey = (length, characters) => {
  let key = '';

  for (let i = 0; i < length; i++) {
    const number = Math.floor(Math.random() * characters.length);
    key = key + characters[number];
  }

  return key;
}

const characters = 'qwertyuiopasdfghjklzxcvbnm1234567890';
console.log(generateKey(16, characters))
