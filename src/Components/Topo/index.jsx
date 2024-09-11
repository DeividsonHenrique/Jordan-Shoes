import { Header, TopoMarca, BtnCarrinho, Icone, Numerositens } from "./style";
import { Link } from "react-router-dom";
import { useCart } from "../../CartContext.jsx";

function Topo() {
  const { cartItems } = useCart();

  return (
    <>
      <Header>
        <TopoMarca>
          <Link to="/" style={{ textDecoration: "none" }}>
            <div>
              <img src="images/icon_jordan.svg" alt="Logo Jordan" />
              <h1>Jordan Shoes</h1>
            </div>
          </Link>
        </TopoMarca>
        <Link to="/cart">
          <BtnCarrinho>
            <Icone />
            <Numerositens>{cartItems.length}</Numerositens>
          </BtnCarrinho>
        </Link>
      </Header>
    </>
  );
}

export default Topo;
