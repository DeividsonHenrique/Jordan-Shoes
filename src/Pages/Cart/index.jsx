import Topo from "../../Components/Topo"
import "../../index.css";


function Cart ( {product} ) {
    return (
        <>
         <Topo />
         <section className="carrinho">
    <h2>Carrinho</h2>
    <table>
        <thead>
            <tr>
                <th>id</th>
                <th>Produto</th>
                <th>Tamanho</th>
                <th>Preço</th>
                <th className="coluna_apagar">Apagar</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td className="coluna_apagar">-</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colSpan="3"><strong>TOTAL</strong></td>
                <td className="coluna_total">-</td>
                <td></td>
            </tr>
        </tfoot>
    </table>
</section>

        </>
    )
}

export default Cart