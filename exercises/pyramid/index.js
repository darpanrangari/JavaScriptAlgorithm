// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row=0, str=''){

    if(row === n){
        return;
    }

    if(str.length === (n * 2) - 1){
        console.log(str);
        pyramid(n, row+1)
        return;
    }

    const midpoint = Math.floor(((n * 2) -1) / 2)

    let add;

    if(midpoint - row <= str.length && midpoint + row >= str.length){
        add = '#'
    }else{
        add = ' '
    }

    pyramid(n, row, str + add)
}

// Solution 1
// function pyramid(n) {
//     const midPoint = Math.floor(((n * 2) - 1)/2);
//
//     for (let row = 0; row < n; row++){
//         let str = '';
//         for(let column = 0; column < 2 * n  - 1; column++){
//             if( midPoint - row <= column && midPoint + row >= column ){
//                 str += '#'
//             }else{
//                 str += ' '
//             }
//         }
//         console.log(str)
//     }
// }


module.exports = pyramid;
