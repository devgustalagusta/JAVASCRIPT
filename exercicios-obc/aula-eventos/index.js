function register(ev){
    console.log(ev)
    const sectionElement = ev.currentTarget.parentNode
    const username = sectionElement.children.username.value
    const password = sectionElement.children.username.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value

    if(password === passwordConfirmation){
        alert('Úsuario ' + username + ' registrado!')
    } else {
        alert('as senhas nao conferem')
    }
}

const button = document.getElementById('register-button')

button.addEventListener('click', register)

function removeListiner (){
    button.removeEventListener('click', register)
    alert('Event removed')
}