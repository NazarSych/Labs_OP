'use strict'

const rangeodd = (start, end) => {
    const num = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 == 1){
             num.push(i);
        }
        
         
}
    return num;
    }
    
console.log (rangeodd(15,30))
