import { Header, TopoMarca, BtnCarrinho, Icone, Numerositens } from "./style";


function Topo() {

  return (
    <>
    
      <Header>
        <TopoMarca>
            <a href="">
                <img src="images/logo-jordan.svg" alt="" />
                <h1>Jordan Shoes</h1>
            </a>
        </TopoMarca>
        <BtnCarrinho>
            <Icone />
            <Numerositens>0</Numerositens>
        </BtnCarrinho>
    </Header>
    </>
  );
}

export default Topo;
