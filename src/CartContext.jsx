/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

// Criação do contexto
const CartContext = createContext();

// Provedor para envolver a aplicação
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeItemFromCart = (size) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.size !== size));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook para acessar o contexto
export const useCart = () => {
  return useContext(CartContext);
};
