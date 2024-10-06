import { useState } from "react";
import Topo from "../../Components/Topo";
import "../../index.css";

import {
  IdAndPayment,
  InputId,
  InputPay,
  InputSelect,
  Bloco,
  BtnFinalizar,
  Botao,
} from "../../Pages/Cart/style";

import { useNavigate } from "react-router-dom";
import { useCart } from "../../CartContext";

function Payment() {
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const [card, setCard] = useState({
    cardNumber: "",
    cardName: "",
    cardDate: "",
    cardCvc: "",
    installment: "",
  });

  const hadnlePaymentInputSubmit = (e) => {
    e.preventDefault();

    console.log(setCard);

    const pedido = {
      id: 1,
      usuario: localStorage.getItem("Nome do Usuario"),
      carrinho: localStorage.getItem("compra"),
      cartao: card,
    };

    localStorage.setItem("pedido", JSON.stringify(pedido));

    navigate("/");
    cartItems.length = 0;
    // console.log(pedido)
    console.log(JSON.parse(localStorage.getItem("pedido")));
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setCard((prevCard) => ({
      ...prevCard,
      [id]: value,
    }));
  };

  return (
    <>
      <Topo />
      <IdAndPayment>
        <h2>Pagamento</h2>
        <p>* campos obrigatórios</p>

        <h3>Dados do cartão</h3>

        <form className="form_pagamento" onSubmit={hadnlePaymentInputSubmit}>
          <InputId>
            <label htmlFor="cardNumber">Número do cartão*</label>
            <InputPay
              type="text"
              id="cardNumber"
              value={card.cardNumber}
              onChange={handleInputChange}
              className="input"
              maxLength={16}
              required
            />
          </InputId>
          <InputId>
            <label htmlFor="cardName">Nome impresso*</label>
            <InputPay
              type="text"
              id="cardName"
              value={card.cardName}
              onChange={handleInputChange}
              className="input"
              required
            />
          </InputId>
          <InputId>
            <label htmlFor="cardDate">Validade*</label>
            <InputPay
              type="text"
              id="cardDate"
              className="input"
              maxLength={5}
              value={card.cardDate}
              onChange={handleInputChange}
              placeholder="MM/AA"
              required
            />
          </InputId>
          <InputId>
            <label htmlFor="cardCvc">Código de Seguranca*</label>
            <InputPay
              type="text"
              id="cardCvc"
              className="input"
              maxLength={3}
              value={card.cardCvc}
              onChange={handleInputChange}
              placeholder="CVV"
              required
            />
          </InputId>
          <InputId>
            <label htmlFor="installment">Número de parcelas</label>
            <InputSelect
              id="installment"
              onChange={handleInputChange}
              value={card.installment}
              required
            >
              <option value="1">À vista</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </InputSelect>
          </InputId>
          <Bloco>
            <input type="checkbox" id="salvar_cartao" className="checkbox" />
            <label htmlFor="salvar_cartao">
              Salvar cartão para minhas próximas compras.*
            </label>
          </Bloco>
          <Botao>
            <BtnFinalizar
              onClick={hadnlePaymentInputSubmit}
              className="btn_finalizar_compra"
            >
              Finalizar compra
            </BtnFinalizar>
          </Botao>
          <Bloco>
            <p>
              Ao finalizar a sua compra, você concorda com a nossa Política de
              trocas e devoluções.
            </p>
          </Bloco>
        </form>
      </IdAndPayment>
    </>
  );
}

export default Payment;
