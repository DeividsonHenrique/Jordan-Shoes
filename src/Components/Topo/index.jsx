import {
  Header,
  TopoMarca,
  BtnCarrinho,
  User,
  Icone,
  Numerositens,
} from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../CartContext.jsx";

function Topo() {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const handleGoToCart = () => {
    if (cartItems.length > 0) {
      navigate("/cart");
    }
  };

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
        <BtnCarrinho>
          <abbr title="Adicione um item ao carrinho">
            <Icone
              onClick={handleGoToCart}
              disabled={cartItems.length === 0}
              style={{
                background: "transparent",
                border: "none",
                cursor: cartItems.length === 0 ? "not-allowed" : "pointer",
              }}
            />
            {cartItems.length > 0 && (
              <Numerositens>{cartItems.length}</Numerositens>
            )}
          </abbr>
          <User />
        </BtnCarrinho>
      </Header>
    </>
  );
}

export default Topo;
