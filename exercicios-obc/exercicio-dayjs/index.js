const dayjs = require("dayjs")

function birthday (date){
    const birthday = dayjs(date)
    // passar apenas o day(). resulta na data/hora atual
    const today = dayjs()
    // calcula a idade da pessoa usando o metodo diff do dayJS
    const ageInYears = today.diff(birthday, 'year')
    // pega a data de nascimento e soma com a idade atual mais 1 para descobrir o proximo aniversario
    const nextBirthday = birthday.add(ageInYears + 1, 'year') + 1
    // mosta quantos dias para o prox. aniversario mostrando qual a diferença entre o proximo ani. e hoje usando o diff
    const daysToNextBirthday = nextBirthday.diff(today, 'day')
    console.log(`Idade: ${ageInYears}`)
    // format permite alterar o resultado da data obtida
    console.log(`o proximo aniversario é em ${nextBirthday.format('DD/MM/YYYY')}`)
    console.log(`Dias ate o completar ${ageInYears} anos: ${daysToNextBirthday} dias`)
}
birthday('2003/02/03')