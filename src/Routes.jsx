import Index from "./Components/Index";
import DetailProducts from "./Pages/DetailProducts";
import Cart from "./Pages/Cart";
import Identification from "./Components/Identification/index.jsx";
import Payment from "./Components/Payment/index.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./CartContext.jsx";

function AppRoutes() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/produto/:id" element={<DetailProducts />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/identification" element={<Identification />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default AppRoutes;
