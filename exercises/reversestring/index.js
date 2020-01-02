// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 3

function reverse(str) {
   return str.split('').reduce((acc, char) =>  char + acc ,'')

}

// solution 2
// function reverse(str) {
//    let reversed = '';
//
//    for(let character of str){
//        reversed = character + reversed
//    }
//
//    return reversed;
// }

// solution 1
// function reverse(str) {
//   return str.split('').reverse().join('') solution 1
//
// }

module.exports = reverse;
