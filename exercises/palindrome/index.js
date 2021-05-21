// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
   return str.split('').every((char,i) => {
        return char === str[str.length - 1 - i];
   });
}

module.exports = palindrome;


// function palindrome(str) {
//     let rev = '';

//     for(var x=str.length; x>=0; x--){
//         rev = rev + str.charAt(x)
//     }

//     if(rev == str){
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// }

// function palindrome(str) {
//     const rev = str.split('').reverse().join('');
 
//     return rev === str;
//  }