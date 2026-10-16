'use strict'

const average = (a, b) => {
    return (a+b)/2;

}

const square = (x) => {
    return x*x;
    
}
const cube = (x) => {
    return x*x*x;
  
}
const calculate = () => {
 const answer = [];
 for (let i = 0; i <= 9; i++) {
    const value = average(square(i), cube(i));
         answer.push(value);
 }

return answer;

}

console.log (calculate());
