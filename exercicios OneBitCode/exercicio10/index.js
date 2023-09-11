const vagas = ""

function listarVagas (){
    const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice){
        textoFinal += indice + ". "
        textoFinal += vaga.nome
        textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
        return textoFinal
    }, "")
    alert(vagasEmTexto)
}

function novaVaga (){
    const nome = prompt("Informe o nome para a vaga:")
    const descricao = prompt("Informe uma descrição para a vaga:")
    const dataLimite = prompt("Informe uma data limite (dd/mm/aaaa0) para a vaga:")
    const confirmacao = confirm(
        "Deseja cria uma nova vaga para estas informaçães?\n" + "Nome: " + nome +  "\nDescrição: " + descricao + "\nData limite: " + dataLimite
    )
    if (confirmacao){
        const novaVaga = {nome,descricao,dataLimite,candidatos: []}
        vagas.push(novaVaga)
        alert("Vaga criada.")
    }
}

function exibirVaga (){
    const indice = prompt("Informe o indice da vaga que deseja ixibir:")
    const vaga = vaga[indice]
    const candidatosEmTexto = vaga.candidatos.reduce(function (textoFinal,candidato){
        return textoFinal + "\n - " + candidato
    }, "")
    alert(
        "Vaga numero: " + indice +
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite +
        "\nQuantidade de candidatos: " + vaga.candidatos.length +
        "\nCandidatos inscritos: " + candidatosEmTexto
    )
}

function inscreverCandidato (){
    const candidato = prompt("Informe o nome do(a) candidato(a):")
    const indice = prompt("Informe o indice da vaga para a qual o(a) candidato(a) deseja de inscrever")
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Deseja inscrever o candidato " + "na vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    )
    if (confirmacao){
        vaga.candidatos.push(candidato)
        alert("Inscrição realizada.")
    }
}