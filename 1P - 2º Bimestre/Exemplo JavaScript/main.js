let titulo = document.querySelector("#Titulo");
let campoTexto = document.querySelector("#campoTexto");
let btnEnviar = document.querySelector("#btEnviar");

function trocarTexto() {
  //Retirando o valor digitado no input e jogando na variavel
  let textoDigitado = campoTexto.value;
  //Atribuindo ao titulo o valor digitado
  titulo.textContent = textoDigitado;
}
btnEnviar.onclick = function () {
  trocarTexto();
};
