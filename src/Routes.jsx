import Index from "./Components/Index";
import DetailProducts from "./Pages/DetailProducts";
import Cart from "./Pages/Cart";
import Identification from "./Components/Identification/index.jsx";
import Payment from "./Components/Payment/index.jsx";
import Login from "./Components/Login/index.jsx";
import Identifique from "./Pages/Identifique/index.jsx";
import Topo from "./Components/Topo/index.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider, FormProvider, LoginProvider } from "./CartContext.jsx";
import { useState } from "react";

function AppRoutes() {
  const [showLogin, setShowLogin] = useState(false);
  const handleLoginClick = () => {
    setShowLogin(!showLogin);
  };

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <FormProvider>
            <LoginProvider openAll={handleLoginClick}>
              <Topo onLoginClick={handleLoginClick} />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/produto/:id" element={<DetailProducts />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/identification" element={<Identification />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/identifique" element={<Identifique />} />
              </Routes>
              {showLogin && <Login onLogin={handleLoginClick} />}
            </LoginProvider>
          </FormProvider>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
