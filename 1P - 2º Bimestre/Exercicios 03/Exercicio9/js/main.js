function calc() {
    const x1 = document.querySelector('#x1').value
    const y1 = document.querySelector('#y1').value
    const x2 = document.querySelector('#x2').value
    const y2 = document.querySelector('#y2').value

    const res = (((Number(x2) - Number(x1)) ** 2) + ((Number(y2) - Number(y1)) ** 2)) ** 0.5

    document.querySelector('#result').innerHTML = `A distancia entre os pontos é: ${res.toFixed(2)}`
}