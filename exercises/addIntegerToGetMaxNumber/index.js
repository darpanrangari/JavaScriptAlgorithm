// This problem basicaly is to inster a given integer into a given number so that we get max number
// if getMaximum(891,5) then max can be 8951
// if getMaximum(1234,5) then max can be 51234
// if getMaximum(100,5) then max can be 5100

function getMaxinum(num , ins){
    let max = num

    let numString = num.toString().split('')

    for (let i = 0; i <= numString.length; i++){

        numString.splice(i,0,ins.toString())

        if(numString.join('') > max){
            max = numString.join('')
        }
        numString = num.toString().split('')

    }

    return parseInt(max)
}




module.exports = getMaxinum;
