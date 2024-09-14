import styled from "styled-components";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Remover = styled(FaTrash)`
  color: var(--dark);
  cursor: pointer;
  height: 20px;
  width: 20px;
  transition: all 0.3s ease;

  &:hover {
    color: red;
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.3));
  }
`;

export const Carrinho = styled.section`
  display: block; /* block */
  padding-top: 30px;
  width: 100%;
  height: 100%;
  margin-block: 20px;
  padding-inline: 20px;

  h2 {
    margin-bottom: 10px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  tr,
  th,
  td {
    border: 1px solid #ccc;
    height: 40px;
  }

  td {
    padding-inline: 10px;
    text-align: center;
  }
`;

export const ColunaApagar = styled.td`
  width: 65px;
  text-align: center;

  span:hover {
    cursor: pointer;
    color: red;
  }
`;

export const ColunaApagarTh = styled.th`
  width: 65px;
  text-align: center;
  col
`;

export const Tfoot = styled.tfoot`
  text-align: right;

  td {
    text-align: right;
  }
`;

export const CarrinhoDetalhes = styled.div`
  width: 100%;
  margin-block: 20px;
  display: flex;
  justify-content: space-between;

  label,
  h3 {
    display: block;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;

    @media (max-width: 968px) {
      font-size: 18px;
    }
  }

  p {
    margin-block: 10px;

    @media (max-width: 968px) {
      font-size: 14px;
    }
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 968px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Prazo = styled.div`
  text-align: center;
`;

export const Input = styled.div`
  position: relative;

  input,
  select {
    width: 100%;
    height: 50px;
    border-radius: 50px;
    border: 1px solid #ccc;
    font-size: 20px;
    padding-left: 20px;
  }
`;

export const BtnCalcular = styled(Link)`
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  height: 40px;
  width: 100px;
  border-radius: 50px;
  border: 1px solid #ccc;
  background-color: #fff;
  font-size: 18px;
  color: var(--dark);
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--dark);
    color: #fff;
  }
`;

export const BtnContinuar = styled(Link)`
  position: absolute;
  right: 0px;
  top: 105%;
  transform: translateY(-50%);
  height: 40px;
  width: 100%;
  border-radius: 50px;
  border: 1px solid #ccc;
  background-color: #fff;
  font-size: 18px;
  color: var(--white);
  background-color: var(--dark);
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;

export const Resumo = styled.div`
  position: relative;
  min-width: 300px;
  display: flex;
  flex-direction: column;

  ul {
    margin-bottom: 20px;
  }

  li {
    font-size: 16px;
    line-height: 48px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;

    &:first-child {
      border-top: 1px solid #ccc;
    }
  }
`;

// Identificação e Pagamento

export const InputId = styled.div`
  position: relative;

  input,
  select {
    width: 100%;
    height: 50px;
    border-radius: 50px;
    border: 1px solid #ccc;
    font-size: 20px;
    padding-left: 20px;
  }
`;

export const IdAndPayment = styled.section`
  margin-top: 50px;
  padding-inline: 20px;
  width: 100%;

  h2 {
    text-align: center;
  }

  select {
    background-image: url("../images/icon_expand_less.svg");
    background-repeat: no-repeat;
    background-position: right 20px center;
    background-size: 25px;
    padding-right: 20px;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-apparence: none;
    appearance: none;
  }
`;

export const Bloco = styled.div`
  width: 100%;
  margin-block: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  input,
  label {
    height: 15px;
    margin-right: 10px;
    cursor: pointer;
  }
`;

export const Botao = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BtnFinalizar = styled(Link)`
  margin-top: 28px;
  transform: translateY(-50%);
  height: 50px;
  width: 300px;
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
