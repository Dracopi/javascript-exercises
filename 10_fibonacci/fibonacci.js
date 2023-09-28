const fibonacci = function(count) {
    if (count < 0) return "OOPS";
    if (count === 0) return 0;
    let a = 0;
    let b = 1;

for (let i = 1; i < count; i++){
    const temp = b;
    b = a + b;
    a = temp; 
    
}
return b;
}
// debo crear un loop que cuente con un if, para sumar en caso de que los dos números previos sean sumables hasta que lleguen al número deseado y que no lo sobrepasen.
// Que repita el número ingresado y luego lo sume, y repita el ultimo numero ingresado con el ultimo número sumado
// deberia crear una nuevaa variable cada nuevo número?
// o deberia crear dos variables que interactuen y se sobreescriban, para evitar el uso de muchas variables
// No, tengo que hacer un array, pq si me estan preguntando la ubicación de las variables es que se revisara un array

// Do not edit below this line
module.exports = fibonacci;
