import { useContext } from "react";
import "../../index.css";

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
    showLoginModal,
    showRegisterModal,
    handleOpenRegisterModal,
    handleCloseRegisterModal,
    handleInputChange,
    handleInputChangeRegister,
    handleFormSubmit,
    handleFormRegisterSubmit,
    errorMessage,
    handleContainerClick,
  } = useContext(LoginContext);

  return (
    <>
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

      {showRegisterModal && (
        <LoginContainer onClick={handleContainerClick}>
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
