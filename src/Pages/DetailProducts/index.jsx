/* eslint-disable react/prop-types */
import { Main } from "../../Components/Index/style";
import "../../index.css";
import { useState } from "react";
import {
  ProdutosDetalhes,
  DetalhesImagens,
  Detalhes,
  Tamanho,
  Tamanhos,
  Radio,
  Numeros,
  Botao,
  Descricao,
  Details,
  Summary,
  Input,
  Voltar,
} from "./style";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../CartContext.jsx";

function DetailProducts({ product, onClose }) {
  const [isOpen, setIsOpen] = useState();
  const [selectedSize, setSelectedSize] = useState(null);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart({
        id: product.id,
        name: product.product_name,
        model: product.product_model,
        price: product.price,
        size: selectedSize,
        quantity: 1,
      });
      navigate("/cart");
    } else {
      alert("Selecione um tamanho.");
    }
  };

  const toggleDetails = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const formatCurrency = (number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(number);
  };

  console.log(handleAddToCart);

  return (
    <>
      <Main>
        <Voltar onClick={onClose}>Voltar</Voltar>

        <ProdutosDetalhes key={product.id}>
          <DetalhesImagens>
            <figure>
              <img src={product.image} alt={product.product_name} />
            </figure>
            <figure>
              <img src={product.image} alt={product.product_name} />
            </figure>
            <figure>
              <img src={product.image} alt={product.product_name} />
            </figure>
            <figure>
              <img src={product.image} alt={product.product_name} />
            </figure>
            <figure>
              <img src={product.image} alt={product.product_name} />
            </figure>
            <figure>
              <img src={product.image} alt={product.product_name} />
            </figure>
            <figure>
              <img src={product.image} alt={product.product_name} />
            </figure>
            <figure>
              <img src={product.image} alt={product.product_name} />
            </figure>
          </DetalhesImagens>

          <div>
            <Detalhes>
              <span>ID: {product.id}</span>
              <h4>{product.product_name}</h4>
              <h5>{product.product_model}</h5>
              <h6>{formatCurrency(product.price)}</h6>
            </Detalhes>

            <Tamanho>
              <h5>Tamanho</h5>
              <Tamanhos>
                <Radio
                  type="radio"
                  name="size"
                  id="size38"
                  value="38"
                  onChange={handleSizeChange}
                />
                <Numeros htmlFor="size38">38</Numeros>

                <Radio
                  type="radio"
                  name="size"
                  id="size39"
                  value="39"
                  onChange={handleSizeChange}
                />
                <Numeros htmlFor="size39">39</Numeros>

                <Radio
                  type="radio"
                  name="size"
                  id="size39p5"
                  value="39,5"
                  onChange={handleSizeChange}
                />
                <Numeros htmlFor="size39p5">39,5</Numeros>

                <Radio
                  type="radio"
                  name="size"
                  id="size40"
                  value="40"
                  onChange={handleSizeChange}
                />
                <Numeros htmlFor="size40">40</Numeros>

                <Radio
                  type="radio"
                  name="size"
                  id="size40p5"
                  value="40,5"
                  onChange={handleSizeChange}
                />
                <Numeros htmlFor="size40p5">40,5</Numeros>

                <Radio
                  type="radio"
                  name="size"
                  id="size41"
                  value="41"
                  onChange={handleSizeChange}
                />
                <Numeros htmlFor="size41">41</Numeros>

                <Radio
                  type="radio"
                  name="size"
                  id="size42"
                  value="42"
                  onChange={handleSizeChange}
                />
                <Numeros htmlFor="size42">42</Numeros>

                <Radio
                  type="radio"
                  name="size"
                  id="size42p5"
                  value="42,5"
                  onChange={handleSizeChange}
                />
                <Numeros htmlFor="size42p5">42,5</Numeros>

                <Radio
                  type="radio"
                  name="size"
                  id="size43"
                  value="43"
                  onChange={handleSizeChange}
                />
                <Numeros htmlFor="size43">43</Numeros>

                <Radio
                  type="radio"
                  name="size"
                  id="size43p5"
                  value="43,5"
                  onChange={handleSizeChange}
                />
                <Numeros htmlFor="size43p5">43,5</Numeros>

                <Radio
                  type="radio"
                  name="size"
                  id="size44"
                  value="44"
                  onChange={handleSizeChange}
                />
                <Numeros htmlFor="size44">44</Numeros>

                <Radio
                  type="radio"
                  name="size"
                  id="size45"
                  value="45"
                  onChange={handleSizeChange}
                />
                <Numeros htmlFor="size45">45</Numeros>

                <Radio
                  type="radio"
                  name="size"
                  id="size46"
                  value="46"
                  onChange={handleSizeChange}
                />
                <Numeros htmlFor="size46">46</Numeros>

                <Radio
                  type="radio"
                  name="size"
                  id="size47"
                  value="47"
                  onChange={handleSizeChange}
                />
                <Numeros htmlFor="size47">47</Numeros>

                <Radio
                  type="radio"
                  name="size"
                  id="size48"
                  value="48"
                  onChange={handleSizeChange}
                />
                <Numeros htmlFor="size48">48</Numeros>

                <Radio
                  type="radio"
                  name="size"
                  id="size49"
                  value="49"
                  onChange={handleSizeChange}
                />
                <Numeros htmlFor="size49">49</Numeros>

                <Radio
                  type="radio"
                  name="size"
                  id="size50"
                  value="50"
                  onChange={handleSizeChange}
                />
                <Numeros htmlFor="size50">50</Numeros>

                <Radio
                  type="radio"
                  name="size"
                  id="size51"
                  value="51"
                  onChange={handleSizeChange}
                />
                <Numeros htmlFor="size51">51</Numeros>
              </Tamanhos>
            </Tamanho>

            <Botao>
              <button type="button" onClick={handleAddToCart}>
                Adicionar ao carrinho
              </button>
            </Botao>

            <Descricao>
              <p>
                Inspirado no AJ1 original, essa edição cano médio mantém o
                visual icônico que você ama, enquanto a escolha de cores e o
                couro conferem uma identidade distinta.
              </p>

              <p>Benefícios</p>

              <ul>
                <li>
                  Cabedal em material genuíno, sintético e tecido para sensação
                  de suporte.
                </li>
                <li>
                  Entressola de espuma e amortecimento Nike Air proporcionam
                  conforto e leveza.
                </li>
                <li>
                  Solado de borracha com ponto de giro cria tração duradoura.
                </li>
              </ul>
            </Descricao>

            <Details open={isOpen} onToggle={toggleDetails}>
              <Summary isOpen={isOpen}>Calcular frete e entrega</Summary>
              <p>Calcule o frete e o prazo de entrega para o sua região</p>

              <label htmlFor="">Insira o CEP</label>

              <Input>
                <input type="text" placeholder="00000-000" />
                <button type="button">Calcular</button>
              </Input>

              <a
                href="https://buscacepinter.correios.com.br/app/endereco/index.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                Não sei meu CEP
              </a>
            </Details>
          </div>
        </ProdutosDetalhes>
      </Main>
    </>
  );
}

export default DetailProducts;
