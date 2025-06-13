import { useState } from "react";
export default function Vendas() {
  const inputStyleDark =
    "border border-gray-700 bg-transparent px-2 rounded-[8px]";
  const buttonStyle =
    "border border-gray-700 bg-gradient-to-r from-blue-800 to-purple-800 hover:scale-95 hover:bg-gradient-to-l from-blue-800 to-purple-800  transition rounded-[8px] p-4";

  const [valor, setValor] = useState("");
  const [pagamento, setPagamento] = useState("");
  const [resultado, setResultado] = useState("");

  const calculo = () => {
    const valorNumber = Number(valor);

    if (isNaN(valorNumber) || !pagamento || valorNumber <= 0) {
      setResultado("Preencha todos os campos corretamente.");
      return;
    }

    let resultadoFinal = 0;

    if (pagamento === "AV") {
      resultadoFinal = valorNumber - valorNumber * 0.1;
    } else if (pagamento === "AVC") {
      resultadoFinal = valorNumber - valorNumber * 0.15;
    } else if (pagamento === "CSJ") {
      resultadoFinal = valorNumber;
    } else {
      resultadoFinal = valorNumber + valorNumber * 0.1;
    }
    setResultado(
      `Valor final de acordo com condição de Pagamento: R$${resultadoFinal.toFixed(2).replace(".", ",")}`,
    );
  };

  return (
    <div className="max-w-[30%] m-auto">
      <div className="flex flex-col justify-center gap-10">
        <h1 className="text-[24px] text-center mt-13">Sistema de Vendas</h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="pagamento">Forma de Pagamento</label>
          <select
            name=""
            id="pagamento"
            className={` p-2 ${inputStyleDark}`}
            onChange={(e) => setPagamento(e.target.value)}
          >
            <option disabled selected>
              --Selecione--
            </option>
            <option value="AV">À vista (Dinheiro, pix ou cheque)</option>
            <option value="AVC">À vista (Cartão de Credito)</option>
            <option value="CSJ">2x no Cartão de Credito(Sem juros)</option>
            <option value="CCJ">2x no Cartão de Credito(Com Juros)</option>
          </select>
          <div className="flex mt-5 justify-between">
            <input
              type="number"
              id="preco"
              placeholder="R$"
              className={inputStyleDark}
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />
            <button className={buttonStyle} onClick={calculo}>
              Calcular
            </button>
          </div>
          {resultado && <p className="mt-5">{resultado}</p>}
        </div>
      </div>
    </div>
  );
}
