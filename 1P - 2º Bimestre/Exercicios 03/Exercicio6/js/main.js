function calc(){
    const weight = document.querySelector('#weight').value.replace(',', '.')
    const price = 12;

    let res = weight * price

    document.querySelector('#result').innerHTML = `Valor a ser pago: R$${res.toFixed(2)}`
}