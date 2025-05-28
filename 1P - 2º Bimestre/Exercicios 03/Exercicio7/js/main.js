function calc(){
    const day = document.querySelector('#day').value
    const month = document.querySelector('#month').value

    const res =Number(day) * Number(month)

    document.querySelector('#result').innerHTML = `Desde o inicio do ano até a data informada ja se passaram ${res} dias.`
}