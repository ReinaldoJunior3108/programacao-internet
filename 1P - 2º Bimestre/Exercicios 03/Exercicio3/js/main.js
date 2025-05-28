function calc(){
    const broas =  document.querySelector('#broas').value
    const pao =  document.querySelector('#pao').value

    const result = Number(Number(pao * 0.12) + Number(broas * 1.50)).toFixed(2);
    const poup = Number(result * 0.1).toFixed(2);
    document.querySelector('#result').innerHTML = `Faturamento do Dia: R$${result.replace('.', ',')} <br /> Poupança: R$${poup.replace('.', ',')}`

}