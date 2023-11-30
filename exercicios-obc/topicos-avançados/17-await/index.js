async function asyncSum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject('arguments must be of type number')
    }
    return a + b
}

async function execute(){
    try {
    const result = await asyncSum(53,33)
    console.log(result + ' anime muito bom!') 
    } catch (err) {
        console.log(err)
    }
}

execute()


