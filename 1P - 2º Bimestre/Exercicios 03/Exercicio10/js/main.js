function calc() {
    const days = document.querySelector('#days').value

    const resAnos = Number(days) / 365
    const resMeses = Number(days) / 30

    document.querySelector('#result').innerHTML = `Tempo sem acidentes: <br /> 
    ${resAnos.toFixed(1)} Anos <br /> 
    ${resMeses.toFixed(1)} Meses <br /> 
    ${days} Dias `
}