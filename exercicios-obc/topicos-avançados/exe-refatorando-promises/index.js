async function imc (peso, altura){
    if (typeof peso !== 'number' || typeof altura !== 'number'){
        return Promise.reject('arguments mus be of type number')
    }
    return peso / altura * altura
}

async function resultado(peso, altura){
    try{
        const result = await imc(peso,altura)
        console.log(`O resultado do IMC foi de ${result}`)
        
        if(result < 18.5) console.log('Situação: MAGREZA')
        else if (result < 25) console.log('Situação: NORMAL')
        else if (result < 30) console.log('Situação: SOBREPESO')
        else if (result < 40) console.log('Situação: OBESIDADE')
        else console.log('Situação: OBESIDADE GRAVE')
    } catch (err){
        console.log(err)
    }
}

resultado(71, 1.50)
resultado(71, null)