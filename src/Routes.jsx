import Index from "./Components/Index";
import DetailProducts from "./Pages/DetailProducts";
import Cart from "./Pages/Cart";
import Identification from "./Components/Identification/index.jsx";
import Payment from "./Components/Payment/index.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider, FormProvider } from "./CartContext.jsx";

function AppRoutes() {
  return (
    <>
      <CartProvider>
        <FormProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/produto/:id" element={<DetailProducts />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/identification" element={<Identification />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </BrowserRouter>
        </FormProvider>
      </CartProvider>
    </>
  );
}

export default AppRoutes;
