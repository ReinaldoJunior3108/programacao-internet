let pessoas = document.querySelector('#pessoas')
let calc = document.querySelector('#calc')
let resultado = document.querySelector('#resultado')

function calcular() {
    const qtd = Number(pessoas.value)
    const queijo = qtd * 50
    const ovos = qtd * 2
    
    resultado.innerHTML = `Quantidade de Ovos: ${ovos} <br /> Quantidade de Queijo(G): ${queijo}g`
}

calc.addEventListener('click', () => {
    calcular()
})