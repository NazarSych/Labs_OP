'use strict'

const contacts = [
  { name: 'Nazar', phone: '09847454545' },
  { name: 'MakDak', phone: '09734254652' },
  { name: 'Inakentiy', phone: '09763462654' }
];

const findPhoneByName = (name) => {
  for (const contact of contacts) {
    if (contact.name === name) {
      return contact.phone;
    }
  }
};

console.log(findPhoneByName('MakDak'));
