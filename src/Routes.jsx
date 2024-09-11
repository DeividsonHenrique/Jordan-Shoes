import Index from './Components/Index'
import DetailProducts from './Pages/DetailProducts'
import Cart from './Pages/Cart'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react'



function AppRoutes() {
    const [cartItems, setCartItems] = useState([]);
    const handleAddToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
      };


    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/produto/:id" element={<DetailProducts 
                    product={{
                        id: 1,
                        product_name: "Tênis Esportivo",
                        product_model: "Modelo XYZ",
                        price: 299.99,
                      }}
                      onAddToCart={handleAddToCart}
                      />} />
                    <Route path="/cart" element={<Cart cartItems={cartItems} />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes