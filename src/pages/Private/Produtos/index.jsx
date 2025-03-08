import LayoutDefault from "../../../layouts/LayoutDefault";


export default function Produtos() {
    return (
        <LayoutDefault>
                <table>
        <thead>
            <tr>
                <th>Código</th>
                <th>Descrição</th>
                <th>Valor</th>
                <th>Validade</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>001</td>
                <td>Produto A</td>
                <td>R$ 100,00</td>
                <td>31/12/2025</td>
            </tr>
            <tr>
                <td>002</td>
                <td>Produto B</td>
                <td>R$ 250,00</td>
                <td>30/06/2026</td>
            </tr>
            <tr>
                <td>003</td>
                <td>Produto C</td>
                <td>R$ 75,50</td>
                <td>15/03/2025</td>
            </tr>
        </tbody>
    </table>
        </LayoutDefault>
    )
}