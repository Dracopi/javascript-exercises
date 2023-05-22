const sumAll = function(...args) {
// Crear un loop que añada un número más cada vez
// hasta llegar a 4, pero que a medida que añada, también los sume.
// y ese es el resultado que necesitamos
let maxArg = Math.max(...args);
let minArg = Math.min(...args);
let sum = 1;
let er = 'ERROR';
// console.log(maxArg)
// console.log(minArg)
// if (...arg === Number){
// console.log("ERROR")
// }
for (const arg of args) {
    if (typeof arg !== "number" || arg < 0) { 
        return er;
   
}

else { do {
    minArg++;
    sum += minArg;
    
  //   console.log(sum);
}    while (minArg < maxArg )

return sum;
    
    
}}

};

// Do not edit below this line
module.exports = sumAll;
