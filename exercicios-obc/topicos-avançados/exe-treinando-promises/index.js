function imc (peso, altura){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if (peso || altura === Number) {
                resolve(peso / (altura * altura))
            } else {
                reject("Promise rejeitada.")
            }
        })
    })
}

function resultado (peso, altura){
    imc(peso, altura).then((result) =>{
        console.log(`O resultado do IMC foi de ${result}`)

        if(result < 18.5) console.log('Situação: MAGREZA')
        else if (result < 25) console.log('Situação: NORMAL')
        else if (result < 30) console.log('Situação: SOBREPESO')
        else if (result < 40) console.log('Situação: OBESIDADE')
        else console.log('Situação: OBESIDADE GRAVE')
    }).catch((err) =>{
        console.log(err)
    })

    console.log('Calculando...')
}

resultado(71, 1.50)