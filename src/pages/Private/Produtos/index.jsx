import LayoutDefault from "../../../layouts/LayoutDefault";
import React from 'react';

const produtos = [
  {
    codigo: '001',
    descricao: 'COMPUTADOR ',
    valor: 'R$ 1.500,00',
    estoque: '10',
  },
  {
    codigo: '002',
    descricao: 'MONITOR',
    valor: 'R$ 350,00',
    estoque: '15',
  },
  {
    codigo: '003',
    descricao: 'MOUSE',
    valor: 'R$ 50,00',
    estoque: '3',
  },
];

const Produtos = () => {
  return (
    <LayoutDefault>
        <div>
        <h1>Lista de Produtos</h1>
        <table className="table">
            <thead>
            <tr>
                <th>Código</th>
                <th>Descricao</th>
                <th>Valor</th>
                <th>Estoque</th>
            </tr>
            </thead>
            <tbody>
            {produtos.map((produto) => (
                <tr key={produto.codigo}>
                <td>{produto.codigo}</td>
                <td>{produto.descricao}</td>
                <td>{produto.valor}</td>
                <td>{produto.estoque}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    </LayoutDefault>
  );
};

export default Produtos;

