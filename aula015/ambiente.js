let num = [5,2,7,5,1,4]
num.sort()

console.log(`${num}`)
console.log(`voce tem ${num.length} posiçoes`)
let pos = num.indexOf(10)
if(pos == -1) {
    console.log('este numero nao existe!')
} else{
    console.log(`o valor esta na posição ${pos}`)
}
