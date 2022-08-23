const removeFromArray = function(array, ...args) {
    //console.log(array.includes(args));
    return array.filter((x) => !args.includes(x));
};

/*
for each element in array
    check if element is equal to the other arguments in function
    if equal, remove element from array
    continue through to next elements
return

*/




// Do not edit below this line
module.exports = removeFromArray;
