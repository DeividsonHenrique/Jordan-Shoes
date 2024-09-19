/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useState } from "react";
import { FormContext } from "../../CartContext";
import Topo from "../../Components/Topo";
import {
  IdAndPayment,
  InputId,
  Bloco,
  BtnFinalizar,
  Botao,
  InputIdent,
  InputCheck,
  Error,
  Mensage,
} from "../../Pages/Cart/style";
import { useNavigate } from "react-router-dom";

function identification() {
  const { formData, setFormData } = useContext(FormContext);
  const navigate = useNavigate(); // Hook para navegação
  const [showMessage, setShowMessage] = useState(false);
  const { complemento, concordo, ...requiredFields } = formData;
  const [touched, setTouched] = useState({});

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação dos campos

    // Verifica se todos os campos obrigatórios foram preenchidos

    const isEmpty = Object.values(requiredFields).some((value) => value === "");

    if (isEmpty || !concordo) {
      setShowMessage(true);
      return;
    }

    setShowMessage(false);
    console.log("Dados do formulário: ", formData);
    navigate("/payment");
  };

  const isValidName = formData.nome.length >= 5;
  const isValidEmail = formData.email.length >= 5;
  const isValidTel = formData.tel.length >= 10;
  const isValidCep = formData.cep1.length >= 8;
  const isValidEndereco = formData.endereco.length >= 10;
  const isValidNumero = formData.numero.length >= 2;
  const isValidBairro = formData.bairro.length >= 5;
  const isValidCidade = formData.cidade.length >= 5;
  const isValidEstado = formData.estado.length >= 2;

  const handleBlur = (e) => {
    const { id } = e.target;
    setTouched((prevTouched) => ({ ...prevTouched, [id]: true }));
  };

  return (
    <>
      <Topo />
      <Mensage show={showMessage} onClick={() => setShowMessage(false)}>
        <span>
          <h1>Preencha todos os campos obrigatórios!</h1>
          <input
            type="button"
            value="Fechar"
            onClick={() => setShowMessage(false)}
          />
        </span>
      </Mensage>
      <IdAndPayment>
        <h2>Identificação</h2>
        <p>* campos obrigatórios</p>

        <form className="form_identificacao" onSubmit={handleSubmit}>
          <InputId>
            <label htmlFor="nome">Nome completo*</label>
            <InputIdent
              type="text"
              id="nome"
              value={formData.nome}
              onChange={handleInputChange}
              isValid={isValidName}
              onBlur={handleBlur}
              required
            />
            {touched.nome && formData.nome.length == "" && (
              <Error>O campo nome é obrigatório</Error>
            )}
          </InputId>
          <InputId>
            <label htmlFor="email">E-mail*</label>
            <InputIdent
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              isValid={isValidEmail}
              onBlur={handleBlur}
              required
            />
            {touched.email && formData.email.length == "" && (
              <Error>O campo Email é obrigatório</Error>
            )}
          </InputId>
          <InputId>
            <label htmlFor="tel">Telefone*</label>
            <InputIdent
              type="tel"
              id="tel"
              className="input"
              value={formData.tel}
              onChange={handleInputChange}
              isValid={isValidTel}
              onBlur={handleBlur}
              required
            />
            {touched.tel && formData.tel.length == "" && (
              <Error>O campo Telefone é obrigatório</Error>
            )}
          </InputId>
          <InputId>
            <label htmlFor="cep1">CEP*</label>
            <InputIdent
              type="text"
              id="cep1"
              className="input"
              maxLength={9}
              placeholder="99999-999"
              value={formData.cep1}
              onChange={handleInputChange}
              isValid={isValidCep}
              onBlur={handleBlur}
              required
            />
            {touched.cep1 && formData.cep1.length == "" && (
              <Error>O campo Cep é obrigatório</Error>
            )}
          </InputId>
          <InputId>
            <label htmlFor="endereco">Endereco*</label>
            <InputIdent
              type="text"
              id="endereco"
              className="input"
              value={formData.endereco}
              onChange={handleInputChange}
              isValid={isValidEndereco}
              onBlur={handleBlur}
              required
            />
            {touched.endereco && formData.endereco.length == "" && (
              <Error>O campo endereço é obrigatório</Error>
            )}
          </InputId>
          <InputId>
            <label htmlFor="numero">Número*</label>
            <InputIdent
              type="text"
              id="numero"
              className="input"
              maxLength={10}
              value={formData.numero}
              onChange={handleInputChange}
              isValid={isValidNumero}
              onBlur={handleBlur}
              required
            />
            {touched.numero && formData.numero.length == "" && (
              <Error>O campo numero é obrigatório</Error>
            )}
          </InputId>
          <InputId>
            <label htmlFor="bairro">Bairro*</label>
            <InputIdent
              type="text"
              id="bairro"
              className="input"
              value={formData.bairro}
              onChange={handleInputChange}
              isValid={isValidBairro}
              onBlur={handleBlur}
              required
            />
            {touched.bairro && formData.bairro.length == "" && (
              <Error>O campo bairro é obrigatório</Error>
            )}
          </InputId>
          <InputId>
            <label htmlFor="complemento">Complemento</label>
            <InputIdent
              type="text"
              id="complemento"
              className="input"
              value={complemento}
              onChange={handleInputChange}
            />
          </InputId>
          <InputId>
            <label htmlFor="cidade">Cidade*</label>
            <InputIdent
              type="text"
              id="cidade"
              className="input"
              value={formData.cidade}
              onChange={handleInputChange}
              isValid={isValidCidade}
              onBlur={handleBlur}
              required
            />
            {touched.cidade && formData.cidade.length == "" && (
              <Error>O campo Cidade é obrigatório</Error>
            )}
          </InputId>
          <InputId>
            <label htmlFor="estado">Estado*</label>
            <InputIdent
              type="text"
              id="estado"
              className="input"
              maxLength={2}
              value={formData.estado}
              onChange={handleInputChange}
              isValid={isValidEstado}
              onBlur={handleBlur}
              required
            />
            {touched.estado && formData.estado.length == "" && (
              <Error>O campo estado é obrigatório</Error>
            )}
          </InputId>
          <Bloco>
            <InputCheck
              type="checkbox"
              id="concordo"
              className="checkbox"
              value={formData.concordo}
              onChange={handleInputChange}
              isValid={formData.concordo}
              onBlur={handleBlur}
              required
            />
            <label htmlFor="concordo">
              Concordo com a Política de Privacidade e os Termos de Uso.*
            </label>
            {touched.concordo && !formData.concordo && (
              <Error>Aceite os Termos de Uso</Error>
            )}
          </Bloco>
          <Botao>
            <BtnFinalizar onClick={handleSubmit}>
              Finalizar cadastro
            </BtnFinalizar>
          </Botao>
        </form>
      </IdAndPayment>
    </>
  );
}

export default identification;
