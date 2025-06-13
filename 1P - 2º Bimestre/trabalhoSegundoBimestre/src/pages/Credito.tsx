import { useState } from "react";
export default function Credito() {
  const inputStyleLight =
    "border border-gray-300 bg-stone-100 rounded-[8px] p-2 placeholder:text-gray-700 w-full text-gray-700";
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const [mesAtual, setMesAtual] = useState(0);
  const [saldos, setSaldos] = useState(Array(12).fill(""));
  const [resultado, setResultado] = useState("");
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const handleChange = (e) => {
    const novosSaldos = [...saldos];
    novosSaldos[mesAtual] = Number(e.target.value);
    setSaldos(novosSaldos);
  };

  const proximo = () => {
    if (mesAtual < 11) setMesAtual(mesAtual + 1);
  };
  const anterior = () => {
    if (mesAtual > 0) setMesAtual(mesAtual - 1);
  };
  function calculo() {
    const total = saldos.reduce((acc, valor) => acc + valor, 0);
    const media = total / 12;

    if (media < 201) {
      setResultado("Infelizmente você nao foi aprovado");
    } else if (media < 401) {
      setResultado(`Sua linha de credito é de R$${(media * 0.2).toFixed(2)} `);
    } else if (media < 601) {
      setResultado(`Sua linha de credito é de R$${(media * 0.3).toFixed(2)}`);
    } else {
      setResultado(`Sua linha de credito é de R$${(media * 0.4).toFixed(2)}`);
    }
  }

  return (
    <div className="m-auto max-w-[20%]">
      <div>
        <div className="flex flex-col gap-2">
          <h1 className="text-[24px] mt-13 ">Saldo de {meses[mesAtual]}</h1>
          <label htmlFor="saldo">Insira o Saldo</label>
          <input
            type="number"
            id="saldo"
            className={inputStyleLight}
            value={saldos[mesAtual]}
            onChange={handleChange}
            placeholder="R$"
          />
        </div>
        <div className="flex justify-between mt-5">
          <button
            className="px-4 py-2 bg-gray-300 rounded text-white hover:bg-gray-400 disabled:opacity-50"
            onClick={anterior}
            disabled={mesAtual === 0}
          >
            Anterior
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
            onClick={proximo}
            disabled={mesAtual === 11}
          >
            Próximo
          </button>
        </div>
        <button
          className="border w-full mt-5 border-gray-700 bg-gradient-to-r from-blue-800 to-purple-800 hover:scale-95 hover:bg-gradient-to-l from-blue-800 to-purple-800  transition rounded-[8px] p-4
       "
          onClick={calculo}
        >
          Calcular Credito
        </button>

        <div className="mt-5 text-[18px]">
          {resultado && <p>{resultado}</p>}
        </div>
      </div>
    </div>
  );
}
