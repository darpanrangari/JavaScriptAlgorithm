// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1]
    })
}

// Solution 2 using for loop
// function palindrome(str){
//     let ispalindrome = true;
//     for (let i = 0; i < str.length; i++)
//     {
//         if(str[i] !== (str[str.length - i - 1 ])){
//             return false;
//         }
//     }
//
//     return ispalindrome ;
// }
// Solution 1
// function palindrome(str) {
//     const reversed = str
//         .split('')
//         .reverse()
//         .join('')
//     return reversed === str;
// }




    module.exports = palindrome;
