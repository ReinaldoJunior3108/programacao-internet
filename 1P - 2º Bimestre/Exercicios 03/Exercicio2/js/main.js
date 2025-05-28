
function calc(){
    const qtd = document.querySelector('#qtd').value

    let result = qtd * 4;
    document.querySelector('#result').innerHTML = `Quantidade de Ferraduras: ${result}`
}