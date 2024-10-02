import Index from "./Components/Index";
import DetailProducts from "./Pages/DetailProducts";
import Cart from "./Pages/Cart";
import Identification from "./Components/Identification/index.jsx";
import Payment from "./Components/Payment/index.jsx";
import Login from "./Components/Login/index.jsx";
import Identifique from "./Pages/Identifique/index.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider, FormProvider, LoginProvider } from "./CartContext.jsx";

function AppRoutes() {
  return (
    <>
      <CartProvider>
        <FormProvider>
          <LoginProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/produto/:id" element={<DetailProducts />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/identification" element={<Identification />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/identifique" element={<Identifique />} />
              </Routes>
            </BrowserRouter>
          </LoginProvider>
        </FormProvider>
      </CartProvider>
    </>
  );
}

export default AppRoutes;
