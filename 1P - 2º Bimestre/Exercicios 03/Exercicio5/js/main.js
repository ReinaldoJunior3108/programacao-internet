
function calc(){
    const gas = document.querySelector('#gas').value
    const price = document.querySelector('#price').value
    const x = Number(price.replace(',', '.'))
    const y = Number(gas.replace(',', '.'))

    let res = x / y
    if(x.isNaN !== true && y.isNaN !== true){
        document.querySelector('#result').innerHTML = `Quantidade em Litros: ${res.toFixed(2)}`
    }else{
        alert('Insira valores validos')
    }
}
