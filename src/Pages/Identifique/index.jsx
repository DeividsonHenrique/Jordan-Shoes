import Topo from "../../Components/Topo";
import { useContext, useState } from "react";
import {
  Input,
  LoginContainer,
  LoginPanel,
  InputDiv,
  BtnEntrar,
  BtnFechar,
  Error,
  Identifiquese,
  CriarEntrar,
  BtnFazerLogin,
  BtnCriarConta,
} from "../../Components/Login/style";
import { LoginContext } from "../../CartContext";

function Identifique() {
  const {
    LoginForm,
    setLoginForm,
    updateEmail,
    RegisterForm,
    setRegisterForm,
  } = useContext(LoginContext);

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Funções para abrir e fechar os modais
  const handleOpenLoginModal = () => {
    setShowLoginModal(true);
    setShowRegisterModal(false);
  };

  const handleOpenRegisterModal = () => {
    setShowRegisterModal(true);
    setShowLoginModal(false);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
    setShowRegisterModal(false);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setLoginForm((prevForm) => ({
      ...prevForm,
      [id]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(LoginForm);
    updateEmail(LoginForm.email);
    setLoginForm({
      email: "",
      senha: "",
    });
    handleCloseModal(); // Fecha o modal após o login
  };

  const handleInputChangeRegister = (e) => {
    const { id, value } = e.target;
    setRegisterForm((prevForm) => ({
      ...prevForm,
      [id]: value,
    }));
  };

  const handleFormRegisterSubmit = (event) => {
    event.preventDefault();

    const { senhaRegister, confirmeSenha } = RegisterForm;

    if (senhaRegister !== confirmeSenha) {
      setErrorMessage("As senhas não coincidem.");
      return;
    }
    if (senhaRegister.length < 5 || confirmeSenha.length < 5) {
      setErrorMessage("A senha deve ter pelo menos 5 caracteres.");
      return;
    }

    console.log("Formulário de cadastro enviado com sucesso!");
    setErrorMessage("");

    console.log(RegisterForm);

    updateEmail(RegisterForm.emailRegister);
    setRegisterForm({
      emailRegister: "",
      senhaRegister: "",
      confirmeSenha: "",
    });
    handleCloseModal(); // Fecha o modal após o cadastro
  };

  const handleContainerClick = (event) => {
    if (event.target === event.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <>
      <Topo />
      <Identifiquese>
        <h2>Identifique-se</h2>
        <CriarEntrar>
          <BtnCriarConta onClick={handleOpenRegisterModal}>
            Criar conta
          </BtnCriarConta>
        </CriarEntrar>
        ou
        <CriarEntrar>
          <BtnFazerLogin onClick={handleOpenLoginModal}>
            Fazer login
          </BtnFazerLogin>
        </CriarEntrar>
      </Identifiquese>

      {/* Modal de Login */}
      {showLoginModal && (
        <LoginContainer onClick={handleContainerClick}>
          <LoginPanel>
            <h2>Entrar</h2>
            <BtnFechar onClick={handleCloseModal}>X</BtnFechar>

            <form onSubmit={handleFormSubmit}>
              <InputDiv>
                <label htmlFor="email">E-mail</label>
                <Input
                  type="email"
                  value={LoginForm.email}
                  id="email"
                  onChange={handleInputChange}
                  autoFocus
                  required
                />
              </InputDiv>
              <InputDiv>
                <label htmlFor="senha">Senha</label>
                <Input
                  type="password"
                  value={LoginForm.senha}
                  id="senha"
                  onChange={handleInputChange}
                  required
                />
              </InputDiv>
              <InputDiv>
                <BtnEntrar type="submit" onClick={handleFormSubmit}>
                  Entrar
                </BtnEntrar>
              </InputDiv>
              <InputDiv>
                {/* <span onClick={handleOpenRegisterModal}>
                  Cadastrar Usuário
                </span> */}
              </InputDiv>
            </form>
          </LoginPanel>
        </LoginContainer>
      )}

      {/* Modal de Registro */}
      {showRegisterModal && (
        <LoginContainer onClick={handleContainerClick}>
          <LoginPanel>
            <h2>Cadastrar</h2>
            <BtnFechar onClick={handleCloseModal}>X</BtnFechar>
            <form onSubmit={handleFormRegisterSubmit}>
              <InputDiv>
                <label htmlFor="emailRegister">E-mail</label>
                <Input
                  type="email"
                  placeholder="user@mail.com"
                  id="emailRegister"
                  onChange={handleInputChangeRegister}
                  autoFocus
                  required
                />
              </InputDiv>

              <InputDiv>
                <label htmlFor="senhaRegister">Senha</label>
                <Input
                  type="password"
                  placeholder="mínimo 5 caracteres"
                  id="senhaRegister"
                  onChange={handleInputChangeRegister}
                  required
                />
              </InputDiv>

              <InputDiv>
                <label htmlFor="confirmeSenha">Confirme a Senha</label>
                <Input
                  type="password"
                  id="confirmeSenha"
                  onChange={handleInputChangeRegister}
                  required
                />
              </InputDiv>
              <InputDiv>
                <BtnEntrar type="submit" onClick={handleFormRegisterSubmit}>
                  Cadastrar
                </BtnEntrar>
              </InputDiv>
              <div>
                <span className="form_aviso"></span>
              </div>
              {errorMessage && <Error>{errorMessage}</Error>}
            </form>
          </LoginPanel>
        </LoginContainer>
      )}
    </>
  );
}

export default Identifique;
