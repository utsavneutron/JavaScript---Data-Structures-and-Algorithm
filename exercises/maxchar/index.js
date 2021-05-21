// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let charMap = {};

    for(let char of str){
        if(charMap[char]){
            charMap[char]++;
        }
        else{
            charMap[char] = 1;
        }
    }

    let max = 0;
    let maxChar = '';

    for(let char in charMap){
        if(charMap[char] > max){
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
    
}

module.exports = maxChar;













// let max = {};
//     let maxNum = 0;
//     let maxChar = '';
//     for(let character of str){
// //         max[character] = max[character] + 1 || 1;
//         if (max[character]) {
//             max[character]++;
//         }
//         else{
//             max[character] = 1;
//         }
//     }

//     for(let char in max) {
//         if(max[char] > maxNum){
//             maxNum = max[char];
//             maxChar = char;
//         }
//     }

//     return maxChar;