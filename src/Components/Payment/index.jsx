import Topo from "../../Components/Topo";
import "../../index.css";

import {
  IdAndPayment,
  InputId,
  Bloco,
  BtnFinalizar,
  Botao,
} from "../../Pages/Cart/style";

function Payment() {
  return (
    <>
      <Topo />
      <IdAndPayment>
        <h2>Pagamento</h2>
        <p>* campos obrigatórios</p>

        <h3>Dados do cartão</h3>

        <form className="form_pagamento">
          <InputId>
            <label htmlFor="numero_cartao">Número do cartão*</label>
            <input
              type="text"
              id="numero_cartao"
              className="input"
              maxLength={16}
              required
            />
          </InputId>
          <InputId>
            <label htmlFor="nome_impresso">Nome impresso*</label>
            <input type="text" id="nome_impresso" className="input" required />
          </InputId>
          <InputId>
            <label htmlFor="validade">Validade*</label>
            <input
              type="text"
              id="validade"
              className="input"
              maxLength={5}
              placeholder="MM/AA"
              required
            />
          </InputId>
          <InputId>
            <label htmlFor="codigo_seguranca">Código de Seguranca*</label>
            <input
              type="text"
              id="codigo_seguranca"
              className="input"
              maxLength={3}
              placeholder="CVV"
              required
            />
          </InputId>
          <InputId>
            <label htmlFor="numero_parcelas">Número de parcelas</label>
            <select id="numero_parcelas" required>
              <option value="1">À vista</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
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
