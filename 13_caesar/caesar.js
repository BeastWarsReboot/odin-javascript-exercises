const caesar = function(str, shift) {
    /*
    (maybe create an array of the alphabet to match up against the cipher strings?)
    turn provided string into array
    for each element of array
        use the shift number to shift the letters of the string/array
        to get the deciphered values of the letters
    turn array back into a string
    return the deciphered string
    */
    shift = 2;
    const alphabet = 
        ['a', 'b', 'c', 'd', 'e', 'f', 'g',
         'h', 'i', 'j', 'k', 'l', 'm', 'n',
         'o', 'p', 'q', 'r', 's', 't', 'u',
         'v', 'w', 'x', 'y', 'z'];
    const cipher = (shift, alphabet) => {};
    const shiftedAlphabet = alphabet.map((letter, index) => {
        const newIndex = (index + shift) % alphabet.length;
        return alphabet[newIndex];
    });


    let str = 'Hello, world!';
    str = str.toLowerCase().split("");
    //console.log(str);
    //let newStr = str.toLowerCase().replace(/[^a-z]/g, " ");
    //const processed = [];
    //const filteredValue = str.filter(letter => alphabet.includes(letter) );
    //console.log(filteredValue);
    for(let i = 0; i < str.length; i++){
        alphabet.indexOf(str[i]);
        //alphabet[7 + shift]
    }
};

/*

> In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher, 
Caesar's code or Caesar shift, is one of the simplest and most widely known 
encryption techniques. It is a type of substitution cipher in which each letter in 
the plaintext is replaced by a letter some fixed number of positions down the 
alphabet.  For example, with a left shift of 3, D would be replaced by A, E would 
become B, and so on. The method is named after Julius Caesar, who used it in his 
private correspondence.

Hint: You may need to convert letters to their unicode values. Be sure to read the 
documentation!

*/



// Do not edit below this line
module.exports = caesar;
