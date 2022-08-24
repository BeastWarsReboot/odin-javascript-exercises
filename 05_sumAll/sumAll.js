const sumAll = function(numOne, numTwo) {
    let sum = 0;
    if(Number.isInteger(numOne) && Number.isInteger(numTwo)){
        if(numOne < 0 || numTwo < 0){
            return 'ERROR';
        } else if(numOne > numTwo){
            for(; numTwo <= numOne; numTwo++){
                sum += numTwo;
            }
        } else {
            for(; numOne <= numTwo; numOne++){
                sum += numOne;
            }
        }
    } else {
        return 'ERROR';
    }
    

    return sum;
    /*
    take in first number and second number
    create variable for sum
    in a loop, starting with first number
        add each number between first number and second number to sum
        after reaching second number exit loop
    return sum
    */
};


// Do not edit below this line
module.exports = sumAll;