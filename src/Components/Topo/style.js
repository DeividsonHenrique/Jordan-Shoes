import styled from "styled-components";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: var(--white_soft);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
`;

export const TopoMarca = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 40px;
    color: var(--dark);
  }

  img {
    margin-right: 5px;
  }

  h1 {
    font-size: 24px;
    font-family: Archivo, sans-serif;
  }
`;
export const BtnCarrinho = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`;

export const User = styled(FaUserCircle)`
  font-size: 28px;
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    filter: invert(0.5);
  }
`;

export const Abreviar = styled.abbr`
  position: relative;
`;

export const Icone = styled(MdOutlineShoppingCart)`
  font-size: 28px;
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    filter: invert(0.5);
  }
`;

export const Numerositens = styled.span`
  position: absolute;
  margin-right: 10px;
  cursor: pointer;
  top: -5px;
  right: -5px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: #f44336;
  color: #f1f1f1;
  font-size: 14px;
  text-align: center;
  line-height: 18px;
`;

export const Usuario = styled.span`
  margin-right: 10px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    filter: invert(0.5);
  }
`;

export const LogOut = styled.span`
  margin-right: 10px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    filter: invert(0.5);
  }
`;
