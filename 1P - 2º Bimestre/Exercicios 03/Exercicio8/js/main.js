function calc() {
    const camisasP = document.querySelector('#p').value
    const camisasM = document.querySelector('#m').value
    const camisasG = document.querySelector('#g').value

    let res = (camisasP * 10) + (camisasM * 12) + (camisasG * 15)

    document.querySelector('#result').innerHTML = `Total: R$${res.toFixed(2).replace('.', ',')}`
}