import {Main} from '../Components/Index/style';
import "../index.css";

function DetailProducts() {
    return(

        <>

        <Main>

        <div className='produtos_detalhes'>
            <div className="detalhes_imagens">
                <figure>
                    <img src="/images/Shoes/air-jordan-1-mid-dutch-green-1-400.png" alt="" />
                </figure>
                <figure>
                    <img src="/images/Shoes/air-jordan-1-mid-dutch-green-1-400.png" alt="" />
                </figure>
                <figure>
                    <img src="/images/Shoes/air-jordan-1-mid-dutch-green-1-400.png" alt="" />
                </figure>
                <figure>
                    <img src="/images/Shoes/air-jordan-1-mid-dutch-green-1-400.png" alt="" />
                </figure>
                <figure>
                    <img src="/images/Shoes/air-jordan-1-mid-dutch-green-1-400.png" alt="" />
                </figure>
                <figure>
                    <img src="/images/Shoes/air-jordan-1-mid-dutch-green-1-400.png" alt="" />
                </figure>
                <figure>
                    <img src="/images/Shoes/air-jordan-1-mid-dutch-green-1-400.png" alt="" />
                </figure>
                <figure>
                    <img src="/images/Shoes/air-jordan-1-mid-dutch-green-1-400.png" alt="" />
                </figure>
            </div>

            <div className="detalhes_info">

                <div className="detalhes">
                    <h4>Nome do produto</h4>
                    <h5>Descrição</h5>
                    <h6>Modelo</h6>
                </div>

                <div className="tamanho">
                    tamanho
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

                <details className="frete">
                    <summary>Calcular frete e entrega</summary>
                    <p>Calcule o frete e o prazo de entrega para o sua região</p>

                    <label htmlFor="">Insira o CEP</label>

                    <input type="text" placeholder="00000-000" />

                    <button type="button">Calcular</button>

                    <a href="#">Não sei meu CEP</a>
                </details>

            </div>


        </div>


        </Main>
        </>

    )
}

export default DetailProducts;