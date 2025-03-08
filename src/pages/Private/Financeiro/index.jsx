import React from 'react';
import LayoutDefault from '../../../layouts/LayoutDefault';

const pagamentos = [
  {
    codigo: '001',
    valor: 'R$ 100,00',
    data: '2025-03-01',
    status: 'Pendente',
  },
  {
    codigo: '002',
    valor: 'R$ 200,00',
    data: '2025-03-05',
    status: 'Pago',
  },
  {
    codigo: '003',
    valor: 'R$ 150,00',
    data: '2025-03-08',
    status: 'Pendente',
  },
];

const Pagamentos = () => {
  return (
    <LayoutDefault>
        <div>
        <h1>Lista de Pagamentos</h1>
        <table className="table">
            <thead>
            <tr>
                <th>Código</th>
                <th>Valor</th>
                <th>Data</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            {pagamentos.map((pagamento) => (
                <tr key={pagamento.codigo}>
                <td>{pagamento.codigo}</td>
                <td>{pagamento.valor}</td>
                <td>{pagamento.data}</td>
                <td>{pagamento.status}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    </LayoutDefault>
  );
};

export default Pagamentos;

