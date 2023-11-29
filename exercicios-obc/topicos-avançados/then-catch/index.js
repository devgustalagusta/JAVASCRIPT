function execute(){
    return new Promise((resolve, reject) =>{
        console.log(`A promise esta sendo executada...`)
        setTimeout(() =>{
            if (false){
                reject('a promisse foi rejeitada')
            } else {
                console.log('Resolvendo a promise...')
            resolve(42)
            }
        }, 1000 * 2)
    })
}

execute().then((result) =>{
    console.log(`A promisse foi resolvida. O resultado foi ${result}`)
}).catch((err) =>{
    console.log(`A promisse foi rejeitada ${err}`)
}).finally(() =>{
    console.log("a promise foi executada.")
})