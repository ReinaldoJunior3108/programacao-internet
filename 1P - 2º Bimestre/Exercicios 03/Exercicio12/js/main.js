function calc() {
    const raio = document.querySelector('#raio').value

    const res = 3.14 * (Number(raio) ** 2)

    document.querySelector('#result').innerHTML = `A area da pizza é de: ${res.toFixed(2)}cm²`
}