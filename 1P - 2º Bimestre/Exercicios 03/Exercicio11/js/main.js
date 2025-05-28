function calc() {
    const amount = document.querySelector('#amount').value

    let res = (Number(amount) + (Number(amount) * 0.15))
    res -= res * 0.08

    document.querySelector('#result').innerHTML = `Salário Final: R$${res.toFixed(2).replace('.', ',')}`
}