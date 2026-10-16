'use strict'

const ipToNumber = (ip = '127.0.0.1') => {
  return ip.split('.').reduce((result, byte) => {
    return (result << 8) | Number(byte);
  }, 0);
}

console.log(ipToNumber());
console.log(ipToNumber('10.0.0.1'));
console.log(ipToNumber('192.168.1.10'))
