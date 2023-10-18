// Média aritmética simples
function avarage(numbers){
    const sum = numbers.reduce((accum, num) =>{
        return accum + num
    },0)
    return sum / numbers.length
}

console.log(avarage([2,6,3,7,4]))
// Média aritmética ponderada
const weighttedAverage = (...entries) => {
    const sum = entries.reduce((accum,{number, weight}) => accum + (number * (weight ?? 1)),0)
    const weightSum = entries.reduce((accum, entry) => accum + (entry.weight ?? 1),0)
    return sum / weightSum
}
console.log(`Média ponderada: ${weighttedAverage(
    {number: 9, weight: 3},
    {number: 7, },
    {number: 10, weight: 1},
)}`)