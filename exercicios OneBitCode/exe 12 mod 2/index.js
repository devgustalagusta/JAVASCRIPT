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
    const id1 = 'expRadio-' + rowIndex + '.1'
    const expRadio1 = creatInput(id1, '0-2 anos', 'techExp-' + rowIndex, 'radio')
    const expLabel1 = creatLabel('0-2 anos', id1)
    const id2 = 'expRadio-' + rowIndex + '.2'
    const expRadio2 = creatInput(id2, '3-4 anos', 'techExp-' + rowIndex, 'radio')
    const expLabel2 = creatLabel('3-4 anos', id1)
    const id3 = 'expRadio-' + rowIndex + '.3'
    const expRadio3 = creatInput(id3, '5+ anos', 'techExp-' + rowIndex, 'radio')
    const expLabel3 = creatLabel('5+ anos', id3)

    newRow.append(
        techNameLabel, techNameInput, expLabel, expRadio1, expLabel1, expRadio2, expLabel2,  expRadio3, expLabel3
    )
    stackInputs.appendChild(newRow)
})