import Topo from "../../Components/Topo";
import {
  Carrinho,
  Table,
  ColunaApagar,
  ColunaApagarTh,
  Remover,
  Tfoot,
} from "./style";
import { useCart } from "../../CartContext.jsx";
function Cart() {
  const { cartItems, removeItemFromCart } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  console.log("Itens recebidos no carrinho:", cartItems);

  const formatCurrency = (number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(number);
  };

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
              {/* <th>Quantidade</th> */}
              <ColunaApagarTh>Apagar</ColunaApagarTh>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.size}</td>
                <td>{formatCurrency(item.price)}</td>
                {/* <td>{item.quantity}</td> */}
                <ColunaApagar>
                  <Remover onClick={() => removeItemFromCart(item.size)} />
                </ColunaApagar>
              </tr>
            ))}
          </tbody>
          <Tfoot>
            <tr>
              <td colSpan="3">
                <strong>Total:</strong>
              </td>
              <ColunaApagar>{formatCurrency(totalPrice)}</ColunaApagar>
              <td></td>
            </tr>
          </Tfoot>
        </Table>
      </Carrinho>
    </>
  );
}

export default Cart;
