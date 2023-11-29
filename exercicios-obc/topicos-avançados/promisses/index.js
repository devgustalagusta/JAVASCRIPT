// pendente/pending
// resolvida/resolved
// rejeitada/reject
// finalizada
const p = new Promise ( (resolve, reject) =>{
    console.log("A promisse esta sendo executada.")
    setInterval(()=>{
    if (true){
        reject(false)
    }

        console.log("Resolvendo a promisse...")
        resolve(true)
    }, 2000)
})

console.log(p)

setTimeout(()=>{
    console.log(p)
}, 1000 * 3)