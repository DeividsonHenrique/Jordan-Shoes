import Topo from "../../Components/Topo";
import "../../index.css";
import { Carrinho, Table, ColunaApagar, ColunaApagarTh, Tfoot } from "./style";

function Cart() {
  return (
    <>
      <Topo />
      <Carrinho>
        <h2>Carrinho</h2>
        <Table>
          <thead>
            <tr>
              <th>id</th>
              <th>Produto</th>
              <th>Tamanho</th>
              <th>Preço</th>
              <ColunaApagarTh>Apagar</ColunaApagarTh>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <ColunaApagar>-</ColunaApagar>
            </tr>
          </tbody>
          <Tfoot>
            <tr>
              <td colSpan="3">
                <strong>TOTAL</strong>
              </td>
              <ColunaApagar>-</ColunaApagar>
              <td></td>
            </tr>
          </Tfoot>
        </Table>
      </Carrinho>
    </>
  );
}

export default Cart;
