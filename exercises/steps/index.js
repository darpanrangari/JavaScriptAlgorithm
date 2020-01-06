// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//

// Solution 2 Recursion
 function steps(n, row=0, str=''){

    if(row === n) return;

    if(str.length === n){
        console.log(str)
        steps(n, row+1)
        return;
    }

    if(str.length <= row){
        str += '#';
    }else{
        str +=' ';
    }

    steps(n, row, str)
 }
// // Solution 1
// function steps(n) {
//
//     for(let row = 0; row < n; row++){
//         let stair = '';
//         for(let column = 0; column < n; column++){
//             if(row >= column){
//                 stair += '#';
//             }else{
//                 stair += ' ';
//             }
//         }
//         console.log(stair)
//     }
//
// }

module.exports = steps;
