import { useEffect } from "react";
import { useState } from "react";
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

import Topo from "../Topo";
import DetailProducts from "../../Pages/DetailProducts";
import Login from "../../Components/Login";

function Index() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

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

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    console.log("Adicionar ao carrinho:", product);
  };

  const handleLoginClick = () => {
    setShowLogin(!showLogin);
  }

  return (
    <>
      
      <Body>
        <Topo onLoginClick={handleLoginClick} />
        {showLogin && <Login onLogin={handleLoginClick} />}
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

            {selectedProduct ? (
              <DetailProducts
                product={selectedProduct}
                onClose={handleCloseDetails}
                onAddToCart={handleAddToCart}
              />
            ) : (
              <ListaProdutos>
                {products.map((p) => (
                  <Card key={p.id} onClick={() => handleCardClick(p)}>
                    {" "}
                    {/* Adiciona um evento onClick */}
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
            )}
          </Produtos>
        </Main>
      </Body>
    </>
  );
}

export default Index;
