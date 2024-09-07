import styled from "styled-components";

export const Voltar = styled.div`
  text-decoration: none;
  color: black;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;

  &:hover {
    cursor: pointer;
    border: 1px solid var(--brand_color);
  }
`;

export const ProdutosDetalhes = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  height: 100%;
  padding: 20px;

  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-content: center;
  gap: 32px;
`;

export const DetalhesImagens = styled.div`
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  figure {
    width: 100%;
    height: 200px;
    background-color: var(--white_soft);

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Detalhes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;

  h4 {
    font-size: 24px;
  }

  h5 {
    font-size: 16px;
    color: var(--brand_color);
  }

  h6 {
    font-size: 24px;
    font-family: "Space Grotesk", sans-serif;
  }
`;

export const Tamanho = styled.div`
  width: 100%;
  margin-bottom: 20px;

  h5 {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

export const Tamanhos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
`;

export const Radio = styled.input`
  display: none;
`;

export const Numeros = styled.label`
  height: 40px;
  border: 1px solid #ccc;

  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border: 1px solid var(--dark);
    cursor: pointer;
  }
`;

export const Botao = styled.div`
  width: 100%;
  margin-bottom: 20px;

  button {
    background-color: var(--dark);
    color: var(--white);
    width: 100%;
    height: 50px;
    border-radius: 50px;
    border: 0;
    cursor: pointer;
    font-size: 16px;
  }
`;

export const Descricao = styled.div`
  font-size: 16px;
  line-height: 26px;
  font-weight: 400;
  margin-bottom: 20px;

  p {
    margin-bottom: 10px;
  }

  ul {
    margin-left: 20px;
  }
`;

export const Details = styled.details`
  font-size: 16px;

  label {
    margin-bottom: 5px;
  }

  &::marker {
    content: " ";
  }

  p {
    margin-bottom: 15px;
  }
`;

export const Summary = styled.summary`
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    height: 24px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px

    &::marker{
        content: " ";
    }




    &::after {
    content: "";
    display: inline-flex;
    width: 20px;
    height: 20px;
    background-size: contain;
    background-repeat: no-repeat;
    margin-left: 5px;
    background-color: gray;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    background-image: ${({ isOpen }) =>
      isOpen
        ? "url('images/icon_expand_more.svg')"
        : "url('images/icon_expand_less.svg')"};
    background-color: ${({ isOpen }) => (isOpen ? "var(--dark)" : "gray")};
  }
`;

export const Input = styled.div`
  margin-block: 10px;
  display: flex;
  flex-direction: column;
  position: relative;

  input {
    width: 100%;
    height: 50px;
    border-radius: 50px;
    border: 1px solid #ccc;
    font-size: 20px;
    padding-left: 20px;
  }

  button {
    font-size: 16px;
    font-weight: 500;
    width: 120px;
    height: 40px;
    background-color: var(--white);
    border-radius: 50px;
    border: 1px solid #ccc;
    font-size: 20px;
    cursor: pointer;
    position: absolute;
    bottom: 5px;
    right: 0px;
    margin-right: 5px;

    &:hover {
      border-color: #222;
    }
  }
`;
