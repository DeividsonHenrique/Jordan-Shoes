import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        --brand_color: #7CA2F4;
        --dark: #121214;
        --white_soft: #f3f7ff;
        --white: #ffffff;
    }


    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  font-family: Archivo, sans-serif;
`;

export const Top_Fixed = styled.section`
  width: 100%;
  height: 64px;
  background-color: var(--white_soft);
  font-weight: 500;
  display: none;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 41px;
    font-size: 16px;
  }

  @media (max-width: 375px) {
    height: 39px;
  }
`;

export const Hero = styled.section`
  margin-top: 50px;
  width: 100%;
  height: 400px;
  background-image: url("/images/image-michael-jordan.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 350px;
  }
`;

export const Hero_Content = styled.div`
  width: 80%;
  height: auto;
  color: var(--white);

  h1,
  p {
    font-size: 24px;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 32px;
    margin-bottom: 20px;
  }

  p {
    line-height: 34px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 18px;
    }

    h2 {
      font-size: 24px;
    }

    p {
      font-size: 18px;
      line-height: 28px;
    }
  }

  @media (max-width: 375px) {
    p {
      font-size: 16px;
      line-height: 26px;
    }
  }
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Produtos = styled.section`
  width: 80%;
  height: 100%;
  margin-block: 80px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 968px) {
    margin-block: 50px;
    width: 100%;
  }
`;

export const Heading = styled.div`
  max-width: 590px;
  height: 100%;
  margin-bottom: 80px;

  h3 {
    text-align: center;
    font-size: 32px;
    margin-bottom: 20px;
  }

  p {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    padding-inline: 20px;

    h3{
      font-size: 24px;
    }

    p{
      font-size: 16px;
      line-height: 26px;
    }

    @media (max-width: 375px) {
    h3{
      font-size: 20px;
    }

    p{
      font-size: 14px;
      line-height: 24px;
    }
  }
`;

export const ListaProdutos = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin-block: 32px;
    gap: 20px;
  }

  @media (max-width: 375px) {
    margin-block: 24px;
    gap: 24px;
  }
`;

export const Card = styled.div`
  width: 326px;
  height: 326px;

  h4 {
    font-size: 18px;
    line-height: 28px;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h6 {
    font-size: 20px;
    line-height: 30px;
    font-family: "Space Grotesk", sans-serif;
  }

  @media (max-width: 768px) {
    width: 280px;
    height: 320px;

    h6 {
      font-size: 20px;
    }
  }
`;
export const Figure = styled.figure`
  width: 100%;
  height: 200px;
  background-color: var(--white_soft);
  border-radius: 20px;
  box-shadow: 0 10px 20px #ccc;
  transition: all 0.3s ease;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: 0 10px 20px var(--brand_color);
    border: 1px solid var(--brand_color);
    outline: none;
  }
`;

export const CardDetalhes = styled.div`
  margin-block: 24px;

  h5 {
    font-size: 16px;
    line-height: 26px;
    color: var(--brand_color);
  }

  @media (max-width: 768px) {
    h4 {
      font-size: 18px;
    }

    h5 {
      font-size: 16px;
    }
  }

  @media (max-width: 375px) {
    h4 {
      font-size: 16px;
    }
  }
`;
