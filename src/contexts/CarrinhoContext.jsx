import { createContext } from "react";

const CarrinhoContext = createContext();

export default function CarrinhoProvider({ props }) {

    const [quantidade, setQuantidade] = useState(1);
    const [carrinho, setCarrinho] = useState(() => {
        const carrinhoSalvo = localStorage.getItem("carrinho");
        return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
    });

    const adicionarAoCarrinho = (produto) => {
        if (produto.id === 2 && !tamanhoSelecionado[2]) {
            alert("Selecione um tamanho antes de adicionar ao carrinho.");
            return;
        }
        setProdutoSelecionado(produto);
        setQuantidade(1);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
    }

    return (
        <CarrinhoContext.Provider value={{ adicionarAoCarrinho }}>
            {props.children} 
        </CarrinhoContext.Provider>
    )
}