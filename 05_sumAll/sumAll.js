const sumAll = function(min, max) {
let minArg = min;
let sum = 0;
if (!Number.isInteger(min) || !Number.isInteger(max))  return "ERROR";
if (min < 0 || max < 0) return "ERROR";
for (sum; min < max +1; ) {
    minArg++;
    sum += minArg;
return sum; 
}};

    // Crear un loop que añada un número más cada vez
    // hasta llegar a 4, pero que a medida que añada, también los sume.
    // y ese es el resultado que necesitamos
    // let maxArg = Math.max(...args);
    // let minArg = Math.min(...args);
    // let sum = 1;
    // let er = 'ERROR';
    // for (const arg of args) {
    //     if (typeof arg !== "number" || arg < 0) { 
    //         return er;
       
    // }
    
    // else { do {
    //     minArg++;
    //     sum += minArg;
        
    //   //   console.log(sum);
    // }    while (minArg < maxArg )
    
    // return sum;
        
        
    // }}
    
    // };
    