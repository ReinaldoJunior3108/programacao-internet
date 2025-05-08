let numberOne = document.querySelector('#numberOne')
let numberTwo = document.querySelector('#numberTwo')
let calc = document.querySelector('#calc')
let resultado = document.querySelector('#resultado')

function calcular() {
    let num1 = Number(numberOne.value)
    let num2 = Number(numberTwo.value)

    resultado.innerHTML = `Soma: ${num1 + num2} <br />Subtração: ${num1 - num2}<br />Multiplicação: ${num1 * num2}<br />Divisão: ${num1 / num2} `
}

calc.addEventListener('click', () => {
    calcular()
})