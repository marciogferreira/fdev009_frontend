import LayoutDefault from "../../../layouts/LayoutDefault"

const categorias = [
  {
    codigo: '001',
    descricao: 'Eletrodomésitico ',
  },
  {
    codigo: '002',
    descricao: 'Cama',
  },
  {
    codigo: '003',
    descricao: 'mesa',
  },
  {
    codigo: '004',
    descricao: 'banho',
  },

];

const Categorias = () => {
  return (
    <LayoutDefault>
        <div>
        <h1>Lista de Categorias</h1>
        <table className="table">
            <thead>
            <tr>
                <th>Código</th>
                <th>Descricao</th>
            </tr>
            </thead>
            <tbody>
            {categorias.map((categoria) => (
                <tr key={categoria.codigo}>
                <td>{categoria.codigo}</td>
                <td>{categoria.descricao}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    </LayoutDefault>
  );
};

export default Categorias