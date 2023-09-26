function creatLabel (text, htmlfor){
    const label = document.createElement('label')
    label.htmlfor = htmlfor
    label.text = text
    return label
}
function creatInput (id, value, name, type = 'text', placeholder = ''){
    const input = document.createElement('input')
    input.id = id
    input.value = value
    input.name = name
    input.type = type
    input.placeholder = placeholder
    return input
}

const addTechBtn = document.getElementById('addTechBtn')
const form = document.getElementById('devForm')
const developers = []
let inputRows = 0

addTechBtn.addEventListener('click', function(ev){
    const stackInputs = document.getElementById('stackInputs')

    const newRow = document.createElement('li')
    const rowIndex = inputRows
    inputRows++
    newRow.id = 'inputRow-' + rowIndex
    newRow.className = 'inputRow'

    const techNameLabel = creatLabel('Nome: ', 'techName-', + rowIndex)
    const techNameInput = creatInput('techName-' + rowIndex,null,'techName')

    const expLabel = creatLabel('Experiencia: ')
    const expRadio1 = creatInput('expRadio-' + rowIndex + '.1', '0-2 anos', 'techExp-' + rowIndex)

    newRow.append(
        techNameLabel, techNameInput
    )
    stackInputs.appendChild(newRow)
})