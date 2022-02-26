/*
     dias da semana status 
     sabado status
    domingo status

    "frase de boas vinadas com dia e o status"

*/


const relogio = document.querySelector('.relogio')
const funcionamento = document.querySelector('.funcionamento')

const formatTimeUnit = unit => String(unit).length === 1 ? `0${unit}` : unit

const calendario = () => {
    let data = new Date()
    let hora = data.getHours()
    let diaSem = data.getDay()
    // Domingo
    if (diaSem == 0) {
        estado = 'Fechados tenha um bom fim de semana.'
        // Dias da semana 
    } else if (diaSem >= 1 && diaSem <= 5) {
        if (hora >= 8 && hora <20) {
            estado = 'Aberto fique a vontade para nos fazer uma visita.'
        } else {
            estado = 'no momento estamos fechados.'
        }
        // Sabado
    } else if (diaSem == 6) {
        if (hora >= 8 && hora <18) {
            estado = 'Aberto fique a vontade para nos fazer uma visita.'
        } else {
            estado = 'Fechados tenha um bom fim de semana.'
        }
    }
    
    switch (diaSem){
        case 0 :
            dia = ('Domingo')
            break
        case 1 :
            dia = ('Segunda-Feira')
            break
        case 2 :
            dia = ('Terça-Feira')
            break
        case 3 :
            dia = ('Quarta-Feira')
            break
        case 4 :
            dia = ('Quinta-Feira')
            break
        case 5 :
            dia = ('Sexta-Feira')
            break
        case 6 :
            dia = ('Sabado')
            break
        default:
            dia = ('[ERRO]')
            
    }
    funcionamento.innerHTML += `Hoje é ${dia} estamos ${estado}`
}

const getClockHTML = (hours, minutes, seconds) =>
    `<span>${formatTimeUnit(hours)}</span> :
    <span>${formatTimeUnit(minutes)}</span> :
    <span>${formatTimeUnit(seconds)}</span>`

const updateClock = () => {
    const present = new Date()
    const hours = present.getHours()
    const minutes = present.getMinutes()
    const seconds = present.getSeconds()

    relogio.innerHTML = getClockHTML(hours, minutes, seconds)


}

setInterval(updateClock, 1000)


