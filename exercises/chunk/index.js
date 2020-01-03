// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const chunked = [];

    let index = 0;

    while(index < array.length){
        chunked.push(array.slice(index,index+ size))
        index += size;
    }
    return chunked;
}
// Solution 1
// function chunk(array, size) {
//     const chunked = [];
//
//     for (element of array){
//         let last = chunked[chunked.length - 1];
//
//         // if(last && last.length != size){
//         if(last && last.length < size){
//             last.push(element)
//         }else{
//             chunked.push([element])
//         }
//     }
//     console.log(chunked);
//     return chunked;
// }

module.exports = chunk;
