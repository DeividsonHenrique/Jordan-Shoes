import styled from "styled-components";
import { FaTrash } from "react-icons/fa";

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
