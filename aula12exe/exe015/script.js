function verificar() {
    var date = new Date()
    var ano = date.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'um Homem'
            if (idade>=0 && idade < 10) {
                // crianca
                img.setAttribute('src', 'crianca-menino.JPEG')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem-menino.JPEG')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homem.JPEG')
            } else {
                //idoso
                img.setAttribute('src', 'idoso.JPEG')
            }
        } else if (fsex[1].checked) {
            gênero = 'uma Mulher'
            if (idade >=0 && idade < 10) {
                // crianca
                img.setAttribute('src', 'crianca-menina.JPEG')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem-menina.JPEG')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulher.JPEG')
            } else {
                //idoso
                img.setAttribute('src', 'idosa.JPEG')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} de ${idade} anos.`
        res.appendChild(img)
    }
}