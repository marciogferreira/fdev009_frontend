import LayoutDefault from "../../../layouts/LayoutDefault"

function Categorias() {
    return (
        <LayoutDefault>
            Categorias
            <table className="table">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Calças</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Camisas</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Blusas</td>
                </tr>
                </tbody>
                
            </table>


        </LayoutDefault>
    )
}

export default Categorias