const repeatString = function(str, num) {
    let result='';
    while(num){
        result += str;
        num--;
    }
    console.log(result);
    return result;

//declare and define empty string result var
//while num is true
//concat result with str
//decrement num
//when num is false, return result

};

// Do not edit below this line
module.exports = repeatString;