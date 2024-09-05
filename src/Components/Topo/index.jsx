import { Header, TopoMarca, BtnCarrinho, Icone, Numerositens } from "./style";
import { Link } from "react-router-dom";


function Topo() {

  return (
    <>
    
      <Header>
        <TopoMarca>
            <Link to="/">
            <a href="">
                <img src="images/icon_jordan.svg" alt="Logo Jordan" />
                <h1>Jordan Shoes</h1>
            </a>
            </Link>
        </TopoMarca>
        <Link to="/cart">
        <BtnCarrinho>
            <Icone />
            <Numerositens>0</Numerositens>
        </BtnCarrinho>
        </Link>
    </Header>
    </>
  );
}

export default Topo;
