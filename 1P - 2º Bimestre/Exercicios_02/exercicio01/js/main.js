let dolar = document.querySelector('#dolar');
let calc = document.querySelector('#calc');
let resultado = document.querySelector('#resultado')

function mascara(dolar) {
	let valorAlterado = dolar.value;
    valorAlterado = valorAlterado.replace(/\D/g, "")
    valorAlterado = valorAlterado.replace(/(\d+)(\d{2})$/, "$1,$2")
	valorAlterado = "R$" + valorAlterado;
	dolar.value = valorAlterado;
}

function calcular(){
    const dol = Number(dolar.value.replace('R$', '').replace(',', '.'))
    const cent0 = dol/100
    const cent1 = (cent0 + dol)
    const cent2 = (cent0*2) + dol
    const cent3 = (cent0*5) + dol
    const cent4 = (cent0*10 ) + dol

    resultado.innerHTML = `<p>Acréscimo de 1%: ${cent1.toFixed(2).replace('.', ',')}`
    resultado.innerHTML += `<p>Acréscimo de 2%: ${cent2.toFixed(2).replace('.', ',')}`
    resultado.innerHTML += `<p>Acréscimo de 5%: ${cent3.toFixed(2).replace('.', ',')}`
    resultado.innerHTML += `<p>Acréscimo de 10%: ${cent4.toFixed(2).replace('.', ',')}`

}

calc.addEventListener('click', () => {
    calcular()
})
