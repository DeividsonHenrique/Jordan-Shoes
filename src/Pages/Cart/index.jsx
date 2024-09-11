/* eslint-disable react/prop-types */
import Topo from "../../Components/Topo";
import "../../index.css";
import { Carrinho, Table, ColunaApagar, ColunaApagarTh, Tfoot } from "./style";
function Cart({ cartItems  }) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  
  return (
    <>
      <Topo />
      <Carrinho>
        <h2>Carrinho</h2>
        <Table> 
          
          <thead>
            <tr>
              <th>ID</th>
              <th>Produto</th>
              <th>Tamanho</th>
              <th>Preço</th>
              <ColunaApagarTh>Apagar</ColunaApagarTh>
            </tr>
          </thead>
          <tbody>
          {cartItems.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.size}</td>
              <td>{item.price}</td>
                <ColunaApagar>-</ColunaApagar>
              </tr>
            ))}
          </tbody>
          <Tfoot>
            <tr>
              <td colSpan="3">
                <strong>Total:</strong>
              </td>
              <ColunaApagar>{totalPrice}</ColunaApagar>
              <td></td>
            </tr>
          </Tfoot>
        </Table>
      </Carrinho>
    </>
  );
}

export default Cart;
