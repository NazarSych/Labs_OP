'use strict';

const people = {
  Nazar: { born: 2008, died: 2026 },
  Person1: { born: 2000, died: 2015 },
};
const ages = (people) => {
  const result = {};
  for (const name in people) {
    const { born, died } = people[name];
    result[name] = died - born;
  }
  return result;
};
console.log(ages(people));
