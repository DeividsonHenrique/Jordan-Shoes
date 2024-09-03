/* eslint-disable react/prop-types */
import {Main} from '../Components/Index/style';
import "../index.css";
import { useState } from "react";

function DetailProducts({ product, onClose }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDetails = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    }

    const formatCurrency = (number) => {
        return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        }).format(number);
    };

    return(

        <>

        <Main>

            <div className='voltar' onClick={onClose}>Voltar</div>

        <div className='produtos_detalhes' key={product.id}>
            <div className="detalhes_imagens">
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
            </div>

            <div className="detalhes_info">

                <div className="detalhes">
                    <h4>{product.product_name}</h4>
                    <h5>{product.product_model}</h5>
                    <h6>{formatCurrency(product.price)}</h6>
                </div>

                <div className="tamanho">
                    <h5>Tamanho</h5>
                    <div className='tamanhos'>
                        <input className="radio" type="radio" name="size" id="size38" value="38"/>
                        <label htmlFor="size38" className="numeros">38</label>
                        
                        <input className="radio" type="radio" name="size" id="size39" value="39"/>
                        <label htmlFor="size39" className="numeros">39</label>
                        
                        <input className="radio" type="radio" name="size" id="size39p5" value="39,5"/>
                        <label htmlFor="size39p5" className="numeros">39,5</label>
                        
                        <input className="radio" type="radio" name="size" id="size40" value="40"/>
                        <label htmlFor="size40" className="numeros">40</label>
                        
                        <input className="radio" type="radio" name="size" id="size40p5" value="40,5"/>
                        <label htmlFor="size40p5" className="numeros">40,5</label>

                        <input className="radio" type="radio" name="size" id="size41" value="41"/>
                        <label htmlFor="size41" className="numeros">41</label>

                        <input className="radio" type="radio" name="size" id="size42" value="42"/>
                        <label htmlFor="size42" className="numeros">42</label>

                        <input className="radio" type="radio" name="size" id="size42p5" value="42,5"/>
                        <label htmlFor="size42p5" className="numeros">42,5</label>

                        <input className="radio" type="radio" name="size" id="size43" value="43"/>
                        <label htmlFor="size43" className="numeros">43</label>

                        <input className="radio" type="radio" name="size" id="size43p5" value="43,5"/>
                        <label htmlFor="size43p5" className="numeros">43,5</label>

                        <input className="radio" type="radio" name="size" id="size44" value="44"/>
                        <label htmlFor="size44" className="numeros">44</label>

                        <input className="radio" type="radio" name="size" id="size45" value="45"/>
                        <label htmlFor="size45" className="numeros">45</label>

                        <input className="radio" type="radio" name="size" id="size46" value="46"/>
                        <label htmlFor="size46" className="numeros">46</label>

                        <input className="radio" type="radio" name="size" id="size47" value="47"/>
                        <label htmlFor="size47" className="numeros">47</label>

                        <input className="radio" type="radio" name="size" id="size48" value="48"/>
                        <label htmlFor="size48" className="numeros">48</label>

                        <input className="radio" type="radio" name="size" id="size49" value="49"/>
                        <label htmlFor="size49" className="numeros">49</label>

                        <input className="radio" type="radio" name="size" id="size50" value="50"/>
                        <label htmlFor="size50" className="numeros">50</label>

                        <input className="radio" type="radio" name="size" id="size51" value="51"/>
                        <label htmlFor="size51" className="numeros">51</label>
                    </div>
                </div>

                <div className="botão">
                    <button type="button">Adicionar ao carrinho</button>
                </div>

                <div className="descricão">
                    <p>Inspirado no AJ1 original, essa edição cano médio mantém o visual icônico que você ama, enquanto a escolha de cores e o couro conferem uma identidade distinta.</p>

                    <p>Benefícios</p>

                    <ul>
                        <li>Cabedal em material genuíno, sintético e tecido para sensação de suporte.</li>
                        <li>Entressola de espuma e amortecimento Nike Air proporcionam conforto e leveza.</li>
                        <li>Solado de borracha com ponto de giro cria tração duradoura.</li>
                    </ul>
                </div>

                <details className="frete" open={isOpen} onToggle={toggleDetails}>
                    <summary className={isOpen ? "icone_expandir" : "icone_recolher"}>Calcular frete e entrega</summary>
                    <p>Calcule o frete e o prazo de entrega para o sua região</p>

                    <label htmlFor="">Insira o CEP</label>

                    <div className='input'>
                        <input type="text" placeholder="00000-000" />
                        <button type="button">Calcular</button>
                    </div>

                    <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank" rel="noopener noreferrer">Não sei meu CEP</a>
                </details>

            </div>


        </div>


        </Main>
        </>

    )
}

export default DetailProducts;