
const container = document.querySelector(".container")
const horas = container.querySelector("#horas")
const minutos = container.querySelector("#minutos")
const segundos = container.querySelector("#segundos")

function Number(element) {
    
    if(element < 10) {
        return '0' + element
    }
    else {
        return element
    }
}

const time = setInterval(function () {

    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    horas.textContent = Number(hours)
    minutos.textContent = Number(minutes)
    segundos.textContent = Number(seconds)
})