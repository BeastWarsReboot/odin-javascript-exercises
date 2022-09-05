const palindromes = function (str) {
    let result = str.toLowerCase().replace(/[^a-z]/g, "");
    return result.split("").reverse().join("") == result;
};

// Do not edit below this line
module.exports = palindromes;
