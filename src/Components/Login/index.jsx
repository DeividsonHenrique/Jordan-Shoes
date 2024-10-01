import { useContext, useState } from "react";
import "../../index.css";
import Topo from "../Topo";
import {
  Input,
  LoginContainer,
  LoginPanel,
  InputDiv,
  BtnEntrar,
  BtnFechar,
  BtnVoltar,
  Error,
} from "./style";
import { LoginContext } from "../../CartContext";

// eslint-disable-next-line react/prop-types
function Login({ onLogin }) {
  const {
    LoginForm,
    setLoginForm,
    updateEmail,
    RegisterForm,
    setRegisterForm,
  } = useContext(LoginContext);
  const [showLoginModal, setShowLoginModal] = useState(true);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
    onLogin();
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
    onLogin();
  };

  const handleContainerClick = (event) => {
    if (event.target === event.currentTarget) {
      onLogin();
    }
  };

  const handleOpenRegisterModal = () => {
    setShowLoginModal(false);
    setShowRegisterModal(true);
  };

  const handleCloseRegisterModal = () => {
    setShowRegisterModal(false);
    setShowLoginModal(true);
  };

  return (
    <>
      <Topo />

      {/* modal login */}

      {showLoginModal && (
        <LoginContainer onClick={handleContainerClick}>
          <LoginPanel>
            <h2>Entrar</h2>
            <BtnFechar onClick={onLogin}>X</BtnFechar>

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
                <BtnEntrar onClick={handleFormSubmit} type="submit">
                  Entrar
                </BtnEntrar>
              </InputDiv>
              <InputDiv>
                <span onClick={handleOpenRegisterModal}>Cadastrar Usuário</span>
              </InputDiv>
            </form>
          </LoginPanel>
        </LoginContainer>
      )}
      <div className="modal_overlay hidden"></div>

      {/* modal cadastrar */}
      {showRegisterModal && (
        <LoginContainer>
          <LoginPanel>
            <h2>Cadastrar</h2>
            <BtnFechar onClick={onLogin}>X</BtnFechar>
            <BtnVoltar onClick={handleCloseRegisterModal}></BtnVoltar>

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
                <BtnEntrar onClick={handleFormRegisterSubmit} type="submit">
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
      <div className="modal_overlay_cadastrar hidden"></div>
    </>
  );
}

export default Login;
