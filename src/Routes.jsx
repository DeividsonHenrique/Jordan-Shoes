import Index from './Components/Index'
import DetailProducts from './Pages/DetailProducts'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/p" element={<DetailProducts />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes