// setTimeOut - executa uma função com um tempo esperado 
console.log("Programa iniciado!")

const timeOut = setTimeout( () => {
    console.log("3 segundos se passaram desde que o programa foi iniciado")
}, 1000 * 3)

clearTimeout(timeOut)

// setInterval - espera o tempo acabar e roda o codigo indefinidamente

let seconds = 0

setInterval(()=>{
    const intervalId = seconds += 3
    console.log(`se passaram ${seconds} segundos.`)
    if(seconds > 12){
        clearInterval(intervalId)
        console.log("tempo esgotado.")
    }
}, 1000 * 3)