'use strict'

const fn = () => {
  const person1 = { name: 'Nazar' };
  let person2 = { name: 'Ivan' };

  person1.name = 'Oleh';
  person2.name = 'Andriy';

  person2 = { name: 'Dmytro' };

  return { person1, person2 };
};

console.log(fn());
