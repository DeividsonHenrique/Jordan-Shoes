import Index from './Components/Index'
import DetailProducts from './Pages/DetailProducts'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './Pages/Cart'


function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/p" element={<DetailProducts />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes