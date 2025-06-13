const inputNota1 = document.querySelector('#inputNota1')
const inputNota2 = document.querySelector('#inputNota2')
const calc = document.querySelector('#calc')
const resultado = document.querySelector('#resultado')

function verificarAprovacao(){
    let nota1 = Number(inputNota1.value)
    let nota2 = Number(inputNota2.value)
    let media = (nota1 + nota2)/2

    if(media >= 6.0){
        resultado.innerHTML = `Média: ${media}, Você foi aprovado!!`
    }else{
        resultado.innerHTML = `Média: ${media}, Não foi aprovado!`
    }
}

calc.addEventListener('click', () => {
    verificarAprovacao()
})