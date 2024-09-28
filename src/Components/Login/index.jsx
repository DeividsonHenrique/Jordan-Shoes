import { useContext } from "react";
import "../../index.css";
import Topo from "../Topo";
import {
  Input,
  LoginContainer,
  LoginPanel,
  InputDiv,
  BtnEntrar,
  BtnFechar,
} from "./style";
import { LoginContext } from "../../CartContext";

// eslint-disable-next-line react/prop-types
function Login({ onLogin }) {
  const { LoginForm, setLoginForm } = useContext(LoginContext);

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
    onLogin();
  };

  const handleContainerClick = (event) => {
    if (event.target === event.currentTarget) {
      onLogin();
    }
  };

  return (
    <>
      <Topo />
      <LoginContainer onClick={handleContainerClick}>
        <LoginPanel>
          <h2>Entrar</h2>
          <BtnFechar onClick={onLogin}>X</BtnFechar>

          <form onSubmit={handleFormSubmit}>
            <InputDiv>
              <label htmlFor="email_login">E-mail</label>
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
              <label htmlFor="senha_login">Senha</label>
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
          </form>
        </LoginPanel>
      </LoginContainer>
      <div className="modal_overlay hidden"></div>
    </>
  );
}

export default Login;
