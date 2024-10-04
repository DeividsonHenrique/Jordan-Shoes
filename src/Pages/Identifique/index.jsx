import { useContext, useEffect } from "react";
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
import { useNavigate } from "react-router-dom";

function Identifique() {
  const {
    LoginForm,
    confirmedEmail,
    showLoginModalIdnt,
    showRegisterModalIdent,
    errorMessageIdent,
    handleOpenLoginModalIdent,
    handleOpenRegisterModalIdent,
    handleCloseModalIdent,
    handleInputChangeIdent,
    handleFormSubmitIdent,
    handleInputChangeRegisterIdent,
    handleFormRegisterSubmitIdent,
    handleContainerClickIdent,
  } = useContext(LoginContext);
  const navigate = useNavigate();

  // verifica e o usuario esta logado e pula para /payment

  useEffect(() => {
    if (confirmedEmail) {
      navigate("/payment");
    }
  }, [navigate, confirmedEmail]);

  return (
    <>
      <Identifiquese>
        <h2>Identifique-se</h2>
        <CriarEntrar>
          <BtnCriarConta onClick={handleOpenRegisterModalIdent}>
            Criar conta
          </BtnCriarConta>
        </CriarEntrar>
        ou
        <CriarEntrar>
          <BtnFazerLogin onClick={handleOpenLoginModalIdent}>
            Fazer login
          </BtnFazerLogin>
        </CriarEntrar>
      </Identifiquese>

      {/* Modal de Login */}
      {showLoginModalIdnt && (
        <LoginContainer onClick={handleContainerClickIdent}>
          <LoginPanel>
            <h2>Entrar</h2>
            <BtnFechar onClick={handleCloseModalIdent}>X</BtnFechar>

            <form onSubmit={handleFormSubmitIdent}>
              <InputDiv>
                <label htmlFor="email">E-mail</label>
                <Input
                  type="email"
                  value={LoginForm.email}
                  id="email"
                  onChange={handleInputChangeIdent}
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
                  onChange={handleInputChangeIdent}
                  required
                />
              </InputDiv>
              <InputDiv>
                <BtnEntrar type="submit" onClick={handleFormSubmitIdent}>
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
      {showRegisterModalIdent && (
        <LoginContainer onClick={handleContainerClickIdent}>
          <LoginPanel>
            <h2>Cadastrar</h2>
            <BtnFechar onClick={handleCloseModalIdent}>X</BtnFechar>
            <form onSubmit={handleFormRegisterSubmitIdent}>
              <InputDiv>
                <label htmlFor="emailRegister">E-mail</label>
                <Input
                  type="email"
                  placeholder="user@mail.com"
                  id="emailRegister"
                  onChange={handleInputChangeRegisterIdent}
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
                  onChange={handleInputChangeRegisterIdent}
                  required
                />
              </InputDiv>

              <InputDiv>
                <label htmlFor="confirmeSenha">Confirme a Senha</label>
                <Input
                  type="password"
                  id="confirmeSenha"
                  onChange={handleInputChangeRegisterIdent}
                  required
                />
              </InputDiv>
              <InputDiv>
                <BtnEntrar
                  type="submit"
                  onClick={handleFormRegisterSubmitIdent}
                >
                  Cadastrar
                </BtnEntrar>
              </InputDiv>
              <div>
                <span className="form_aviso"></span>
              </div>
              {errorMessageIdent && <Error>{errorMessageIdent}</Error>}
            </form>
          </LoginPanel>
        </LoginContainer>
      )}
    </>
  );
}

export default Identifique;
