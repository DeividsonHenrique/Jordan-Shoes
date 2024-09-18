/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from "react";
import { FormContext } from "../../CartContext";
import Topo from "../../Components/Topo";
import {
  IdAndPayment,
  InputId,
  Bloco,
  BtnFinalizar,
  Botao,
  InputIdent,
  Error,
} from "../../Pages/Cart/style";
import { useNavigate } from "react-router-dom";


function identification() {
  const { formData, setFormData } = useContext(FormContext);
  const navigate = useNavigate(); // Hook para navegação

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

    // if (formData.nome.length < 5) {
    //   alert("O campo nome deve ter pelo menos 5 caracteres");
    //   return;
    // }

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
  // const isValidConcordo = formData.concordo.length >= 5;


  


  return (
    <>
      <Topo />
      <IdAndPayment>
        <h2>Identificação</h2>
        <p>* campos obrigatórios</p>

        <form className="form_identificacao" onSubmit={handleSubmit}>
          <InputId>
            <label htmlFor="nome">Nome completo*</label>
            <InputIdent type="text" id="nome" value={formData.nome} onChange={handleInputChange} isValid={isValidName} required  />
            {formData.nome.length === "" || formData.nome.length < 5 && <Error>O campo nome deve ter pelo menos 5 caracteres</Error>}
          
          </InputId>
          <InputId>
            <label htmlFor="email">E-mail*</label>
            <InputIdent type="email" id="email" className="input" value={formData.email} onChange={handleInputChange} isValid={isValidEmail} required />
            {formData.email.length === "" || formData.email.length < 5 && <Error>O campo email deve ter pelo menos 5 caracteres</Error>}
          </InputId>
          <InputId>
            <label htmlFor="tel">Telefone*</label>
            <InputIdent type="tel" id="tel" className="input" value={formData.tel} onChange={handleInputChange} isValid={isValidTel} required />
            <Error></Error>
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
              required
            />
          </InputId>
          <InputId>
            <label htmlFor="endereco">Endereco*</label>
            <InputIdent type="text" id="endereco" className="input" value={formData.endereco} onChange={handleInputChange} isValid={isValidEndereco} required />
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
              required
            />
          </InputId>
          <InputId>
            <label htmlFor="bairro">Bairro*</label>
            <InputIdent type="text" id="bairro" className="input" value={formData.bairro} onChange={handleInputChange} isValid={isValidBairro} required />
          </InputId>
          <InputId>
            <label htmlFor="complemento">Complemento</label>
            <InputIdent type="text" id="complemento" className="input" value={formData.complemento} onChange={handleInputChange} />
          </InputId>
          <InputId>
            <label htmlFor="cidade">Cidade*</label>
            <InputIdent type="text" id="cidade" className="input" value={formData.cidade} onChange={handleInputChange} isValid={isValidCidade} required />
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
              required
            />
          </InputId>
          <Bloco>
            <input
              type="checkbox"
              id="concordo"
              className="checkbox"
              value={formData.concordo}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="concordo">
              Concordo com a Política de Privacidade e os Termos de Uso.*
            </label>
          </Bloco>
          <Botao>
            <BtnFinalizar onClick={handleSubmit} >
              Finalizar cadastro
            </BtnFinalizar>
          </Botao>
        </form>
      </IdAndPayment>
    </>
  );
}

export default identification;
