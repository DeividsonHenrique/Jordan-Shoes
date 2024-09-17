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
  Valido,
  Invalido,
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

    if (formData.nome.length === "") {
      alert("O campo nome deve ter pelo menos 5 caracteres");
      return;
    }

    console.log("Dados do formulário: ", formData);

    navigate("/payment");
  };

  return (
    <>
      <Topo />
      <IdAndPayment>
        <h2>Identificação</h2>
        <p>* campos obrigatórios</p>

        <form className="form_identificacao" onSubmit={handleSubmit}>
          <InputId>
            <label htmlFor="nome">Nome completo*</label>
            <input type="text" id="nome" className="input" value={formData.nome} onChange={handleInputChange} required  />
            {formData.nome !== "" && (
              <Valido></Valido> // Exibe um erro se o campo estiver vazio
            ) || formData.nome.length < 5 && <Invalido>{`${formData.nome} é obrigatorio`}</Invalido>
            
            }
          
          </InputId>
          <InputId>
            <label htmlFor="email">E-mail*</label>
            <input type="email" id="email" className="input" value={formData.email} onChange={handleInputChange} required />
            <Error></Error>
          </InputId>
          <InputId>
            <label htmlFor="tel">Telefone*</label>
            <input type="tel" id="tel" className="input" value={formData.tel} onChange={handleInputChange} required />
            <Error></Error>
          </InputId>
          <InputId>
            <label htmlFor="cep1">CEP*</label>
            <input
              type="text"
              id="cep1"
              className="input"
              maxLength={9}
              placeholder="99999-999"
              value={formData.cep1}
              onChange={handleInputChange}
              required
            />
          </InputId>
          <InputId>
            <label htmlFor="endereco">Endereco*</label>
            <input type="text" id="endereco" className="input" value={formData.endereco} onChange={handleInputChange} required />
          </InputId>
          <InputId>
            <label htmlFor="numero">Número*</label>
            <input
              type="text"
              id="numero"
              className="input"
              maxLength={10}
              value={formData.numero}
              onChange={handleInputChange}
              required
            />
          </InputId>
          <InputId>
            <label htmlFor="bairro">Bairro*</label>
            <input type="text" id="bairro" className="input" value={formData.bairro} onChange={handleInputChange} required />
          </InputId>
          <InputId>
            <label htmlFor="complemento">Complemento</label>
            <input type="text" id="complemento" className="input" value={formData.complemento} onChange={handleInputChange} />
          </InputId>
          <InputId>
            <label htmlFor="cidade">Cidade*</label>
            <input type="text" id="cidade" className="input" value={formData.cidade} onChange={handleInputChange} required />
          </InputId>
          <InputId>
            <label htmlFor="estado">Estado*</label>
            <input
              type="text"
              id="estado"
              className="input"
              maxLength={2}
              value={formData.estado}
              onChange={handleInputChange}
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
