const caesar = function(str, shift) {
    /*
    create array of alphabet
    convert characters of str to unicode?
    for each element of array
        use the shift number to shift the letters of the string/array
        to get the deciphered values of the letters
        add the values to result 
    return the deciphered result string
    */

    //will hold enciphered message
    let upperAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowerAlpha = upperAlpha.toLowerCase();
    console.log(lowerAlpha);
    let result = "";

    //for loop starts by getting unicode values on each character in the string
    //then adds the shift value to the character code
    for(let i = 0; i < str.length; i++){
        let charCode = str.charCodeAt(i);
        let charShift = charCode + shift;
        
        
        //Trying to get this to deal with wrapping
        //let wrapChk = charCode % charShift;
        //92 % 87 = 5
        //Shifted Character = (OG character index + shift) % 26
        if(charShift > 90 && charShift < 97){
            charShift -= 26;
        } else if()
  
        //this deals with punctuation
        if(/[!?. ,]/.test(str.charAt(i)) == true){
            result += str.charAt(i);
        } 
        
        //This addes the enciphered characters to the result
        else if(charShift >= 97 && charShift <= 122){
            result += String.fromCharCode(charShift);
        } else if(charShift >= 65 && charShift <= 90){
            result += String.fromCharCode(charShift);
        }
        //result += String.fromCharCode(charShift)
        //console.log(charShift);
    }
    console.log(result);
    return result;
//uppercase letters unicode: 65 - 90
//lowercase letters unicode: 97 - 122


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
