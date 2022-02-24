const relogio = document.querySelector('.relogio')
const funcionamento = document.querySelector('.funcionamento')

const formatTimeUnit = unit => String(unit).length === 1 ? `0${unit}` : unit

const calendario = () => {
    let data = new Date()
    let hora = data.getHours()
    let diaSem = data.getDay()


    if(diaSem >= 1 && diaSem <= 5){
        if (hora > 8 && hora < 18) {
            estado = 'Abertos'
        } else {
            estado = 'Fechados'
        }
    }else{
        estado = `Fechado Um bom fim de semana`
    }


    funcionamento.innerHTML += `Estamos ${estado}`
    
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


