import { useState } from "react";
export default function Detran() {
  const [ano, setAno] = useState("");
  const [valor, setValor] = useState("");
  const [resultado, setResultado] = useState("");

  const inputStyleDark =
    "border border-gray-700 bg-transparent rounded-[8px] p-2 w-full";
  const inputStyleLight =
    "border border-gray-300 bg-stone-100 rounded-[8px] p-2 placeholder:text-gray-700 w-full text-gray-700";

  function calculoImposto() {
    const anoNumber = Number(ano);
    const valorNumber = Number(valor);

    let taxa = 0;

    if (anoNumber < 1990) {
      taxa = 0.01;
    } else if (anoNumber >= 1990) {
      taxa = 0.015;
    }

    const valorTaxa = valorNumber * taxa;

    setResultado(
      `Imposto de Transferencia: R$${valorTaxa.toFixed(2).replace(".", ",")}`,
    );
  }
  return (
    <div className="max-w-[30%] flex flex-col justify-center items-center m-auto ">
      <h1 className="text-2xl mt-13">Impostos de Transferencia</h1>
      <div className="flex flex-col justify-center gap-6 mt-7">
        <div className="flex flex-col gap-2">
          <label htmlFor="ano">Ano de Fabricação do Veiculo</label>

          <input
            className={inputStyleDark}
            value={ano}
            onChange={(e) => setAno(e.target.value)}
            type="text"
            placeholder="Ex: 2000"
            id="ano"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="ano">Valor de Tabela do Veiculo</label>
          <input
            className={inputStyleLight}
            type="text"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            placeholder="Ex: 25400,00"
            step="0.01"
            id="valor"
          />
        </div>
        <button
          className="border w-full border-gray-700 bg-gradient-to-r from-blue-800 to-purple-800 hover:scale-95 hover:bg-gradient-to-l from-blue-800 to-purple-800  transition rounded-[8px] p-4
       "
          onClick={calculoImposto}
        >
          Calcular Taxa de Transferência
        </button>
      </div>
      <div>{resultado && <p>{resultado}</p>}</div>
    </div>
  );
}
