'use strict'

const hash = {
  Nazar: '9367636784',
  MakDak: '87534987487',
  Inakentiy: '74576757634',
};

const findPhoneByName = (name) => {
  return hash[name];
};

console.log(findPhoneByName('Inakentiy'));
