import { createContext, useState } from "react";

export const CarrinhoContext = createContext();

export default function CarrinhoProvider(props) {
    
    const [carrinho, setCarrinho] = useState(() => {
        const carrinhoSalvo = localStorage.getItem("carrinho");
        return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
    });
    function adicionarAoCarrinho(produto, quantidade) {
        
    }

    return (
        <CarrinhoContext.Provider value={{ carrinho, setCarrinho, adicionarAoCarrinho }}>
            {props.children} 
        </CarrinhoContext.Provider>
    )
}