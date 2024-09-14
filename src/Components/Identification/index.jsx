import Topo from "../../Components/Topo";
import "../../index.css";
import {
  IdAndPayment,
  InputId,
  Bloco,
  BtnFinalizar,
  Botao,
} from "../../Pages/Cart/style";

function identification() {
  return (
    <>
      <Topo />
      <IdAndPayment>
        <h2>Identificação</h2>
        <p>* campos obrigatórios</p>

        <form className="form_identificacao">
          <InputId>
            <label htmlFor="nome">Nome completo*</label>
            <input type="text" id="nome" className="input" required />
          </InputId>
          <InputId>
            <label htmlFor="email">E-mail*</label>
            <input type="email" id="email" className="input" required />
          </InputId>
          <InputId>
            <label htmlFor="tel">Telefone*</label>
            <input type="tel" id="tel" className="input" required />
          </InputId>
          <InputId>
            <label htmlFor="cep1">CEP*</label>
            <input
              type="text"
              id="cep1"
              className="input"
              maxLength={9}
              placeholder="99999-999"
              required
            />
          </InputId>
          <InputId>
            <label htmlFor="endereco">Endereco*</label>
            <input type="text" id="endereco" className="input" required />
          </InputId>
          <InputId>
            <label htmlFor="numero">Número*</label>
            <input
              type="text"
              id="numero"
              className="input"
              maxLength={10}
              required
            />
          </InputId>
          <InputId>
            <label htmlFor="bairro">Bairro*</label>
            <input type="text" id="bairro" className="input" required />
          </InputId>
          <InputId>
            <label htmlFor="complemento">Complemento</label>
            <input type="text" id="complemento" className="input" />
          </InputId>
          <InputId>
            <label htmlFor="cidade">Cidade*</label>
            <input type="text" id="cidade" className="input" required />
          </InputId>
          <InputId>
            <label htmlFor="estado">Estado*</label>
            <input
              type="text"
              id="estado"
              className="input"
              maxLength={2}
              required
            />
          </InputId>
          <Bloco>
            <input
              type="checkbox"
              id="concordo"
              className="checkbox"
              required
            />
            <label htmlFor="concordo">
              Concordo com a Política de Privacidade e os Termos de Uso.*
            </label>
          </Bloco>
          <Botao>
            <BtnFinalizar to="/payment" className="btn_finalizar_cadastro">
              Finalizar cadastro
            </BtnFinalizar>
          </Botao>
        </form>
      </IdAndPayment>
    </>
  );
}

export default identification;
