// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let m = n.toString();
    let rev = m.split('');
    if(rev[0] === '-'){
        let dash = rev.shift();
        rev = dash + rev.reverse().join('');
    }
    else {
        rev = rev.reverse().join('');
    }
    return parseInt(rev);
}

module.exports = reverseInt;
