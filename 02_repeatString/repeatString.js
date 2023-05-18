const repeatString = function(word, num) {
    let stringC = '';
    let i = 0; 
    if (num < 0){
        stringC += "ERROR";
    }

    for (i; i < num; i++){
        stringC += word;
       
    } 
    return stringC;
};

// Do not edit below this line
module.exports = repeatString;
