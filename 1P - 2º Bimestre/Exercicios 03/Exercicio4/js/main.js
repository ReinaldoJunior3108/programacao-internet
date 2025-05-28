function calc(){
    const age = document.querySelector('#age').value
    const name = document.querySelector('#name').value
    let dias = Number(age) * 365;

    document.querySelector('#result').innerHTML = `${name}, Você ja viveu ${dias} dias!`
}