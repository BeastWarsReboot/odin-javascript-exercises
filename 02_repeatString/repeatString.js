const repeatString = function(str, num) {
    let result='';
    while(num){
        if(num < 0) return 'ERROR';
        result += str;
        num--;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;