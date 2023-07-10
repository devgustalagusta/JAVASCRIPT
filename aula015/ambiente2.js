let valores = [3,4,6,3,34,6,14,33,29]
valores.sort()
/*   
for(let pos = [0]; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores) {
    console.log(`A posiçáo ${pos} tem o valor ${valores[pos]}`)
}