const palindromes = function (str) {
    /*
    create variable to hold "new" string
    remove punctuation marks(such as commas or exclamation points) using regex
    split string into array
    reverse array
    join array back into string

    */
    console.log(str);
    let result = str.replace(/[^\w\s\']|_/g, "")
                    .replace(/\s+/g, " ")
                    .split()
                    .reverse()
                    .join();
    str = str.replace(/[^\w\s\']|_/g, "");
    console.log(result);
    if(result === str) return true;
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
