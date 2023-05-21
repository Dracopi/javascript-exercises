const sumAll = function(...arg) {
// Crear un loop que añada un número más cada vez
// hasta llegar a 4, pero que a medida que añada, también los sume.
// y ese es el resultado que necesitamos
let maxArg = Math.max(...arg);
let minArg = Math.min(...arg);
let sum = 1;
// if (...arg === Number){
// console.log("ERROR")
// }
// else {
    do {
        minArg++;
        sum += minArg;
        
        console.log(sum);
    }    while (minArg < maxArg)
    
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
