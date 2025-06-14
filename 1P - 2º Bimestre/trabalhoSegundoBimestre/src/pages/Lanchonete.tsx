import { useState } from "react";
export default function Lanchonete() {
  const inputStyleDark =
    "border border-gray-700 bg-transparent rounded-[8px] p-2 w-[90%]";
  const inputStyleLight =
    "border border-gray-300 bg-stone-100 rounded-[8px] p-2 placeholder:text-gray-700 text-gray-700";

  type ProdutoSeleciona = {
    codigo: number;
    produto: string;
    preco: number;
  };

  type ItensAdicionados = ProdutoSeleciona & {
    quantidade: number;
    total: number;
  };
  const [codigoItem, setCodigoItem] = useState<number | "">("");
  const [nomeProduto, setNomeProduto] = useState("");
  const [produtoSelecionado, setProdutoSelecionado] = useState<ProdutoSeleciona | null>(null);
  const [itensSelecionados, setItensSelecionados] = useState<ItensAdicionados[]>([]);

  const [quantidade, setQuantidade] = useState(1);
  const cardapio = [
    {
      codigo: 1,
      produto: "Cachorro Quente",
      preco: 11,
    },
    {
      codigo: 2,
      produto: "Bauru",
      preco: 8.5,
    },
    {
      codigo: 3,
      produto: "Misto Quente",
      preco: 8,
    },
    {
      codigo: 4,
      produto: "Hamburguer",
      preco: 9,
    },
    {
      codigo: 5,
      produto: "CheeseBurguer",
      preco: 10,
    },
    {
      codigo: 6,
      produto: "Refrigerante",
      preco: 4.5,
    },
  ];
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const handleSelectChange = (e) => {
    const codigo = Number(e.target.value);
    setCodigoItem(codigo);
    const item = cardapio.find((p) => p.codigo === codigo);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    setProdutoSelecionado(item || "");
    setNomeProduto(item?.produto || "");
  };
  const selecionarProdutoNome = () => {
    const entrada = nomeProduto.trim().toLowerCase();
    let item;
    const possivelCodigo = Number(entrada);

    if (!isNaN(possivelCodigo)) {
      item = cardapio.find((p) => p.codigo === possivelCodigo);
    } else {
      item = cardapio.find((p) => p.produto.toLowerCase() === entrada);
    }
    if (item) {
      setProdutoSelecionado(item);
      setNomeProduto(item.produto);
      setCodigoItem(item.codigo);
    } else {
      alert("Produto nao enontrado");
      setProdutoSelecionado(null);
      setCodigoItem("");
    }
  };

  const adicionarProduto = () => {
    if (!produtoSelecionado || !quantidade) return;

    const itemComQuantidade = {
      ...produtoSelecionado,
      quantidade,
      total: quantidade * produtoSelecionado.preco,
    };
    setItensSelecionados((prev) => [...prev, itemComQuantidade]);

    setNomeProduto("");
    setProdutoSelecionado(null);
    setCodigoItem("");
    setQuantidade(1);
  };
  return (
    <div className="max-w-[40%] m-auto">
      <div className="flex flex-col justify-center gap-10">
        <h1 className="text-[24px] text-center mt-13">Lanchonete</h1>
        <div className="flex flex-col gap-3 justify-center">
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <input
                id="produtoInput"
                type="text"
                placeholder="Ex:  Insira o Codigo ou Nome do Produto"
                value={nomeProduto}
                className={inputStyleDark}
                onChange={(e) => setNomeProduto(e.target.value)}
                onBlur={() => {
                  if (nomeProduto.trim() !== "") {
                    selecionarProdutoNome();
                  }
                }}
              />
              <button
                className="border border-gray-500 bg-blue-500 hover:bg-transparent transition rounded-[8px] p-2 text-nowrap"
                onClick={selecionarProdutoNome}
              >
                Buscar Produto
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between gap-5">
            <div>
              <p>Ou selecione na lista abaixo</p> <br />
              <select
                id="codigo"
                value={codigoItem}
                onChange={handleSelectChange}
              >
                <option value="">-- Escolha --</option>
                {cardapio.map((item) => (
                  <option key={item.codigo} value={item.codigo}>
                    {item.codigo} – {item.produto}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col items-center">
              <label htmlFor="qtd">QTD</label>
              <input
                id="qtd"
                type="number"
                className={`w-[40%] ${inputStyleLight}`}
                placeholder="Ex: 1"
                value={quantidade}
                onChange={(e) => setQuantidade(Number(e.target.value))}
              />
            </div>
            <button
              className="border mt-5 border-gray-700 bg-gradient-to-r from-blue-800 to-purple-800 hover:scale-95 hover:bg-gradient-to-l from-blue-800 to-purple-800  transition rounded-[8px] p-4
              "
              onClick={adicionarProduto}
            >
              Adicionar
            </button>
          </div>
          {itensSelecionados.length > 0 && (
            <>
              <div className="border border-gray-500 rounded-[8px]  mt-10">
                <table className="w-full ">
                  <thead>
                    <tr>
                      <th>QTD</th>
                      <th>Produto</th>
                      <th>Valor</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {itensSelecionados.map((item, index) => (
                      <tr key={index}>
                        <td>{item.quantidade}</td>
                        <td>{item.produto}</td>
                        <td>R$ {item.total.toFixed(2).replace(".", ",")}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="text-right mt-4 font-bold">
                Total: R${" "}
                {itensSelecionados
                  .reduce((acc, item) => acc + item.total, 0)
                  .toFixed(2)
                  .replace(".", ",")}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
