//1
let cm = document.getElementById('cm')
let kg = document.getElementById('kg')
let resultado = document.getElementById('resultado')
let submit = document.getElementById('submit')
submit.addEventListener('click', (e) => {
    e.preventDefault()
    calcularMasaCorporal()
})
function calcularMasaCorporal() {
    resultado.value = (kg.value / ((cm.value / 100) * (cm.value / 100))).toFixed(1)
}

//2
let peso = document.getElementById('peso')
let dolar = document.getElementById('dolar')
peso.addEventListener('keyup', () => {
    dolar.value = parseFloat(peso.value / 290)
})
dolar.addEventListener('keyup', () => {
    peso.value = parseFloat(dolar.value * 290)
})