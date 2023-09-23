function register(ev){
    console.log(ev)
    const sectionElement = ev.currentTarget.parentNode
    const username = ev.currentTarget.children.username.value
    const password = ev.currentTarget.children.username.value
    const passwordConfirmation = ev.currentTarget.children.passwordConfirmation.username.value

    if(password === passwordConfirmation){
        alert('Úsuario ' + username + ' registrado!')
    } else {
        alert('as senhas nao conferem')
    }
}

const button = document.getElementById('register-button')

button.addEventListener('click', register)