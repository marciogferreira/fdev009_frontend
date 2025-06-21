import React from 'react';
import LayoutDefault from '../../../layouts/LayoutDefault';

const pagamentos = [
  {
    codigo: '001',
    valor: 'R$ 00,00',
    data: '00-00-0000',
    status: '',
  },
  {
    codigo: '002',
    valor: 'R$ 00,00',
    data: '00-00-0000',
    status: '',
  },
  {
    codigo: '003',
    valor: 'R$ 00,00',
    data: '00-00-0000',
    status: '',
  },
  {
    codigo: '004',
    valor: 'R$ 00,00',
    data: '00-00-0000',
    status: '',
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

