const caesar = function(str, shift) {

    //alphabet for finding characters
    //result for holding the enciphered message
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = "";

    //for loop adds charIndex to shift modulo 26 to get the charShift value 
    //Shifted Character = (OG character index + shift) % 26
    for(let i = 0; i < str.length; i++){
        let charIndex = alphabet.indexOf(str.charAt(i).toUpperCase());
        let charShift = (charIndex + shift) % 26;

        //if charShift is a negative value, add 26 to get the proper enciphered character
        if(Math.sign(charShift) === -1){
            charShift += 26;
        }

        
        //This checks if the current character is a punctuation mark (which eval to -1)
        //then adds them to the message unchanged
        if(charIndex == -1){
            result += str.charAt(i);
        }
        
        //Otherwise this addes the enciphered characters to the result
        //by checking if they are included in the alphabe with some casing work
        else if(alphabet.includes(str.charAt(i))){
            result += alphabet.charAt(charShift);
        }
        else if (alphabet.toLowerCase().includes(str.charAt(i))){
            result += alphabet.toLowerCase().charAt(charShift);
        }
    }

    console.log(result);
    return result;
};


// Do not edit below this line
module.exports = caesar;
