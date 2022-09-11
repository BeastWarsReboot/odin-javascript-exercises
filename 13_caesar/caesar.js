const caesar = function(str, shift) {

    //alphabet for finding characters
    //result for holding the enciphered message
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = "";
 
    //Shifted Character = (OG character index + shift) % 26
    for(let i = 0; i < str.length; i++){
        let charIndex = alphabet.indexOf(str.charAt(i).toUpperCase());
        let charShift = (charIndex + shift) % 26;

        //deals with negative shift values
        if(Math.sign(charShift) === -1){
            charShift += 26;
        }

        
        //This checks for punctuation marks
        if(charIndex == -1){
            result += str.charAt(i);
        }
        
        //With some case checks, will add enciphered char to message
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
