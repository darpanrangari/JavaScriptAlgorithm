// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB){
//     return stringA.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('') === stringB.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
// }

// Solution 1
function anqagrams(stringA, stringB) {

    let charMapStringA = charMap(stringA);
    let charMapStringB = charMap(stringB);

    if (Object.keys(charMapStringA).length !== Object.keys(charMapStringB).length){
        return false;
    }

    for(let char in charMapStringA){
        if(charMapStringA[char] !== charMapStringB[char]){
            return false;
        }
    }
    return true;
}

function charMap(str){
    let obj = {}

    for(let char of str.replace(/[^\w]/g).toLowerCase()){
        obj[char] = obj[char] + 1 || 1
    }

    return obj
}


module.exports = anagrams;
