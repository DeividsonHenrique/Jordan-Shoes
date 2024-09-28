import styled from "styled-components";
import { Link } from "react-router-dom";

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 50px;
  font-size: 20px;
  padding-left: 20px;
  border: 2px solid #ccc;
`;

export const LoginContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* Fundo escuro transparente */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; /* Garante que o modal ficará acima de tudo */
`;

export const LoginPanel = styled.div`
  position: relative;
  background-color: var(--white_soft);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 350px;
  width: 100%;
  text-align: center;
`;

export const InputDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BtnEntrar = styled(Link)`
  margin-top: 38px;
  transform: translateY(-50%);
  height: 50px;
  width: 200px;
  border-radius: 50px;
  border: 1px solid #ccc;
  background-color: #fff;
  font-size: 20px;
  color: var(--white);
  background-color: var(--dark);
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;

export const BtnFechar = styled.span`
  position: absolute;
  right: 20px;
  top: 20px;
  text-align: center;
  cursor: pointer;
  width: 25px;
  height: 25px;
  padding: 2px 5px;
  border-radius: 50%;
  border: 1px solid #ccc;
  transition: all 0.3s ease;

  &:hover {
    font-weight: bold;
    color: #fff;
    background-color: #222;
  }
`;
