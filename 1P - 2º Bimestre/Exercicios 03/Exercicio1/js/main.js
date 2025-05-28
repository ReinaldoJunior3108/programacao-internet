
function area(){
    const x = document.querySelector('#x').value
    const y = document.querySelector('#y').value
    let result = x * y;
    document.querySelector('#area').innerHTML = `Area Total: ${result}m²`
}