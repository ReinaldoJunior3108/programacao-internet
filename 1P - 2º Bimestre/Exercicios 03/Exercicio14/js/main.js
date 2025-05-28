function calc() {
    const valor = document.querySelector('#valor').value

    const inteiro = Number(valor)

    const carlos = Math.floor(valor / 3)
    const andre = Math.floor(valor / 3)
    const felipe = inteiro - carlos - andre

    document.querySelector('#result').innerHTML = `Carlos: R$${carlos.toFixed(2).replace('.', ',')} <br />
                                                            André: R$${andre.toFixed(2).replace('.', ',')} <br />
                                                            Felipe: R$${felipe.toFixed(2).replace('.', ',')}`
}