import {Main} from '../Components/Index/style';
import "../index.css";
import {Link} from 'react-router-dom';

function DetailProducts({ products }) {
    return(

        <>

        <Main>

            <div className='voltar'>Voltar</div>
            <Link className='voltar' to="/">Voltar</Link>

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
                    <h4></h4>
                    <h5>Descrição</h5>
                    <h6>Modelo</h6>
                </div>

                <div className="tamanho">
                    <h5>Tamanho</h5>
                    <div className='tamanhos'>
                        38 até 51
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

                <details className="frete">
                    <summary className="icone_expandir">Calcular frete e entrega</summary>
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