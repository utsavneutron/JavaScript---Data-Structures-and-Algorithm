// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let rev = '';

    for(var x=str.length; x>=0; x--){
        rev = rev + str.charAt(x)
    }
    return rev;

}

module.exports = reverse;
