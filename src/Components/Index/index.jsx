import { useEffect } from "react";
import { useState, useParams } from "react";
import {
  Body,
  Top_Fixed,
  Hero,
  Hero_Content,
  Main,
  Produtos,
  Heading,
  ListaProdutos,
  Card,
  Figure,
  CardDetalhes,
} from "./style";


function Index() {
  // const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const buscarProdutos = async () => {
      try {
        const response = await fetch("/Data/products.json");
        if (!response.ok) {
          throw new Error("Erro ao buscar os produtos.");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    };

    buscarProdutos();
  }, []);

  const formatCurrency = (number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(number);
  };


// addEventListener("click", () => {
//   console.log('clicou')
// });

  return (
    <>
      <Body>
        <Top_Fixed>Frete Gratis para todo Brasil</Top_Fixed>

        <Hero>
          <Hero_Content>
            <h1>
              <img src="/images/logo-jordan.svg" alt="" />
              Jordan Shoes
            </h1>

            <h2>A melhor loja de Jordan</h2>
            <p>
              O tênis Jordan é fruto de uma velha e forte <br /> parceria entre
              a nike e o jogador Michael Jordan.
            </p>
          </Hero_Content>
        </Hero>

        <Main>
          <Produtos>
            <Heading>
              <h3>Os melhores em só lugar</h3>
              <p>
                A marca Jordan na JordanShoes é a escolha certa para os amanetes
                sneakers que buscam estilo e conforto.
              </p>
            </Heading>

            <ListaProdutos to="/p">
                {products.map((p) => (
                  <Card key={p.id}>
                    <Figure>
                      <img src={p.image} alt={p.product_name} />
                    </Figure>
                    <CardDetalhes>
                      <h4>{p.product_name}</h4>
                      <h5>{p.product_model}</h5>
                    </CardDetalhes>
                    <h6>{formatCurrency(p.price) || p.price}</h6>
                  </Card>
                ))}
            </ListaProdutos>
          </Produtos>
        </Main>
      </Body>
    </>
  );
}

export default Index;
