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

function Payment() {
  const navigate = useNavigate();
  const [card, setCard] = useState({
    cardNumber: "",
    cardName: "",
    cardDate: "",
    cardCvc: "",
  });

  const hadnlePaymentInputSubmit = (e) => {
    e.preventDefault();

    console.log(setCard);

    const pedido = {
      id: 1,
      usuario: localStorage.getItem("Nome do Usuario"),
      carrinho: localStorage.getItem("compra"),
      cartao: card,
    }

    localStorage.setItem("pedido", JSON.stringify(pedido));

    navigate("/")

    console.log(pedido)
    console.log(JSON.parse(localStorage.getItem("pedido")));
  };

  return (
    
    <>
      <Topo />
      <IdAndPayment>
        <input type="button" value="teste" onClick={hadnlePaymentInputSubmit} />
        <h2>Pagamento</h2>
        <p>* campos obrigatórios</p>

        <h3>Dados do cartão</h3>

        <form className="form_pagamento">
          <InputId>
            <label htmlFor="numero_cartao">Número do cartão*</label>
            <InputPay
              type="text"
              id="numero_cartao"
              value={card.cardNumber}
              className="input"
              maxLength={16}
              required
            />
          </InputId>
          <InputId>
            <label htmlFor="nome_impresso">Nome impresso*</label>
            <InputPay
              type="text"
              id="nome_impresso"
              value={card.cardName}
              className="input"
              required
            />
          </InputId>
          <InputId>
            <label htmlFor="validade">Validade*</label>
            <InputPay
              type="text"
              id="validade"
              className="input"
              maxLength={5}
              value={card.cardDate}
              placeholder="MM/AA"
              required
            />
          </InputId>
          <InputId>
            <label htmlFor="codigo_seguranca">Código de Seguranca*</label>
            <InputPay
              type="text"
              id="codigo_seguranca"
              className="input"
              maxLength={3}
              value={card.cardCvc}
              placeholder="CVV"
              required
            />
          </InputId>
          <InputId>
            <label htmlFor="numero_parcelas">Número de parcelas</label>
            <InputSelect id="numero_parcelas" required>
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
            <BtnFinalizar to="/" className="btn_finalizar_compra">
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
