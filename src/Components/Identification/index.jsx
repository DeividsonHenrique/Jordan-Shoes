/* eslint-disable react-hooks/rules-of-hooks */
import { useRef, useContext, useEffect, useState } from "react";
import { FormContext } from "../../CartContext";
import Topo from "../../Components/Topo";
import {
  IdAndPayment,
  InputId,
  Bloco,
  BtnFinalizar,
  Botao,
  InputIdent,
  InputSelect,
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
  const [cep, setCep] = useState(""); // Estado para o CEP
  const [, setEncontrar] = useState({}); // Estado para armazenar os dados do CEP
  const numeroRef = useRef(null);

  useEffect(() => {
    const buscarCep = async (cep) => {
      if (cep.length === 8) {
        try {
          const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
          if (!response.ok) {
            throw new Error("Erro ao buscar o CEP");
          }
          const data = await response.json();
          setEncontrar(data);

          // Atualiza o formData com os dados do CEP
          setFormData((prevData) => ({
            ...prevData,
            endereco: data.logradouro || "",
            bairro: data.bairro || "",
            cidade: data.localidade || "",
            estado: data.uf || "",
          }));

          // Move o foco para o campo "número" quando os dados do CEP forem carregados

          if (numeroRef.current) {
            numeroRef.current.focus();
          }
        } catch (error) {
          console.error("Erro na requisição:", error);
        }
      } else {
        setFormData((prevData) => ({
          ...prevData,
          endereco: "",
          bairro: "",
          cidade: "",
          estado: "",
        }));
      }
    };

    if (cep) {
      buscarCep(cep);
    }
  }, [cep, setFormData]);

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmpty = Object.values(requiredFields).some((value) => value === "");

    if (isEmpty || !concordo) {
      setShowMessage(true);
      return;
    }

    setShowMessage(false);
    console.log("Dados do formulário: ", formData);
    localStorage.setItem("Dados", JSON.stringify(formData));
    navigate("/payment");
  };

  const isValidName = formData.nome.length >= 5;
  const isValidEmail = formData.email.length >= 5;
  const isValidTel = formData.tel.length >= 10;
  const isValidCep = formData.cep1.length >= 8;
  const isValidEndereco = formData.endereco.length >= 5;
  const isValidNumero = formData.numero.length >= 1;
  const isValidBairro = formData.bairro.length >= 5;
  const isValidCidade = formData.cidade.length >= 5;
  const isValidEstado =
    formData.estado.length === 2 && formData.estado.length !== "0";

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
            {touched.nome && !isValidName && (
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
            {touched.email && !isValidEmail && (
              <Error>O campo Email é obrigatório</Error>
            )}
          </InputId>
          <InputId>
            <label htmlFor="tel">Telefone*</label>
            <InputIdent
              type="number"
              id="tel"
              className="input"
              placeholder="99 99999-9999"
              maxLength={15}
              value={formData.tel}
              onChange={handleInputChange}
              isValid={isValidTel}
              onBlur={handleBlur}
              required
            />
            {touched.tel && !isValidTel && (
              <Error>O campo Telefone é obrigatório</Error>
            )}
          </InputId>
          <InputId>
            <label htmlFor="cep1">CEP*</label>
            <InputIdent
              type="number"
              id="cep1"
              className="input"
              maxLength={9}
              placeholder="99999-999"
              value={formData.cep1}
              onChange={(e) => {
                const newCep = e.target.value;
                setFormData((prevData) => ({ ...prevData, cep1: newCep }));
                setCep(newCep);
              }}
              isValid={isValidCep}
              onBlur={handleBlur}
              required
            />
            {touched.cep1 && !isValidCep && (
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
            {touched.endereco && !isValidEndereco && (
              <Error>O campo endereço é obrigatório</Error>
            )}
          </InputId>

          <InputId>
            <label htmlFor="numero">Número*</label>
            <InputIdent
              type="number"
              id="numero"
              className="input"
              maxLength={10}
              value={formData.numero}
              onChange={handleInputChange}
              isValid={isValidNumero}
              onBlur={handleBlur}
              ref={numeroRef}
              required
            />
            {touched.numero && !isValidNumero && (
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
            {touched.bairro && !isValidBairro && (
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
            {touched.cidade && !isValidCidade && (
              <Error>O campo Cidade é obrigatório</Error>
            )}
          </InputId>

          <InputId>
            <label htmlFor="estado">Estado*</label>
            <InputSelect
              id="estado"
              className="input"
              maxLength={2}
              value={formData.estado}
              onChange={handleInputChange}
              isValid={isValidEstado}
              onBlur={handleBlur}
              required
            >
              <option value="0">Selecione um estado</option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </InputSelect>
            {touched.estado && !isValidEstado && (
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
