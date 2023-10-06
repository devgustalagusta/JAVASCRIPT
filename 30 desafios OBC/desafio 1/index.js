function avarage(numbers){
    const sum = numbers.reduce((accum, num) =>{
        return accum + num
    },0)
    return sum / numbers.length
}

console.log(avarage([10,9,6,1,5,7]))
