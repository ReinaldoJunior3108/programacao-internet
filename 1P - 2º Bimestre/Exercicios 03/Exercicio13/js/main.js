function calc() {
    const num = document.querySelector('#number').value

    const centena = Math.floor(Number(num) / 100)
    const dezena = Math.floor((Number(num) % 100) / 10)
    const unidade = Number(num) % 10

    document.querySelector('#result').innerHTML = `Centenas: ${centena} <br />
                                                            Dezenas: ${dezena} <br />
                                                            Unidade: ${unidade}`
}