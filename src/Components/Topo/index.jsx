import {
  Header,
  TopoMarca,
  BtnCarrinho,
  User,
  Icone,
  Numerositens,
  Usuario,
  LogOut,
  Abreviar,
} from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useCart, LoginUser } from "../../CartContext.jsx";

// eslint-disable-next-line react/prop-types
function Topo({ onLoginClick }) {
  const { cartItems } = useCart();
  const { confirmedEmail, handleLogOutAndRedirect } = LoginUser();
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
          <Abreviar title="Adicione um item ao carrinho">
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
          </Abreviar>
          <User onClick={onLoginClick} />
          {confirmedEmail && (
            <>
              <Usuario>{confirmedEmail}</Usuario>
              <LogOut onClick={handleLogOutAndRedirect}>Sair</LogOut>
            </>
          )}
        </BtnCarrinho>
      </Header>
    </>
  );
}

export default Topo;
