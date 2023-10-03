const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')

const allowedKeys = ["(", ")", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "%"]
// fazem os botoes funcionarem
document.querySelectorAll('.charKey').forEach(function(charKeyBtn){
    charKeyBtn.addEventListener('click', function(){
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})
// adiciona a funcionalidade de apagar ao button clear
document.getElementById('clear').addEventListener('click', function(){
    input.value = ''
    input.focus()
})
// faz o programa reconhecer apenas as teclas da tela
input.addEventListener('keydown', function(ev){
    ev.preventDefault()
    if (allowedKeys.includes(ev.key)){
        input.value += ev.key
        return
    }
    if (ev.key === 'Backspace'){
        input.value = input.value.slice(0 , -1)
    }
    if (ev.key === 'Enter'){
        calculate()
    }
})
// adiciona a função de click ao botar e executa o calculate
document.getElementById('equal').addEventListener('click', calculate)
// cuidado ao usar a função eval -usada para executar qualquer codigo-
function calculate(){
    const result = eval(input.value)
    resultInput.value = result
}
// copia o resultado para a área de tranferencia
document.getElementById('copyToClipboard').addEventListener('click', function(ev){
    const button = ev.currentTarget
    if(button.innerText === 'Copy'){
        button.innerText = 'Copied'
        button.classList.add('success')
        navigator.clipboard.writeText(resultInput.value)
    } else {
        button.innerText = 'Copy'
        button.classList.remove('success')
    }
})
// alternar entre os modos dark/light
document.getElementById('themeSwitcher').addEventListener('click', function(){
    if (main.dataset.theme === 'dark'){
        root.style.setProperty('--bg-color', '#f1f5f9')
        root.style.setProperty('--border-color', '#aaa')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--primary-color', '#26834a')
        main.dataset.theme = 'light'
    } else {
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--border-color', '#666')
        root.style.setProperty('--font-color', '#f1f5f9')
        root.style.setProperty('--primary-color', '#4dff91')
        main.dataset.theme = 'dark'
    }
})
