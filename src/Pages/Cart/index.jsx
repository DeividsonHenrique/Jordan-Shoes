import Topo from "../../Components/Topo";
import "../../index.css";
import {
  Carrinho,
  Table,
  ColunaApagar,
  ColunaApagarTh,
  Remover,
  Tfoot,
  CarrinhoDetalhes,
  Prazo,
  Input,
  BtnCalcular,
  BtnContinuar,
  Resumo,
} from "./style";
import { useCart } from "../../CartContext.jsx";
function Cart() {
  const { cartItems, removeItemFromCart } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  
  //console.log("Itens recebidos no carrinho:", cartItems);

  const formatCurrency = (number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(number);
  };

  const valorFrete = 0;

  const valorDesconto = 0;

  const totalDaCompra = totalPrice + valorFrete - valorDesconto;

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

        <CarrinhoDetalhes className="carrinho__detalhes">
          <Prazo>
            <label htmlFor="cep2">Prazo de entrega</label>
            <Input>
              <input type="number" id="cep2" placeholder="00000-000" />
              <BtnCalcular>Calcular</BtnCalcular>
            </Input>
            <p>Tempo previsto para entrega</p>
            <a
              href="https://buscacepinter.correios.com.br/app/endereco/index.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              Não sei meu CEP
            </a>
          </Prazo>

          <div className="cupom">
            <label htmlFor="cupom">Cupom de Desconto</label>
            <Input>
              <input type="text" id="cupom" />
              <BtnCalcular>Aplicar</BtnCalcular>
            </Input>
            <span className="desconto_cupom"></span>
          </div>

          <Resumo className="resumo">
            <h3>Resumo</h3>
            <ul>
              <li>
                <span>Valor dos produtos</span>
                <span className="sub_total">{formatCurrency(totalPrice)}</span>
              </li>
              <li>
                <span>Frete</span>
                <span className="valor_frete">
                  {formatCurrency(valorFrete)}
                </span>
              </li>
              <li>
                <span>Desconto</span>
                <span className="valor_desconto">
                  {formatCurrency(valorDesconto)}
                </span>
              </li>
              <li>
                <span>Total da compra</span>
                <span className="total_compra">
                  {formatCurrency(totalDaCompra)}
                </span>
              </li>
            </ul>
            <BtnContinuar to="/identification">Continuar</BtnContinuar>
          </Resumo>
        </CarrinhoDetalhes>
      </Carrinho>
    </>
  );
}

export default Cart;
