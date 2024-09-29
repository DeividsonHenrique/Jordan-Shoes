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

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    tel: "",
    cep1: "",
    endereco: "",
    numero: "",
    bairro: "",
    complemento: "",
    cidade: "",
    estado: "",
    concordo: false,
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const Formulario = () => {
  return useContext(FormContext);
};

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [LoginForm, setLoginForm] = useState({
    email: "",
    senha: "",
  });

  const [confirmedEmail, setConfirmedEmail] = useState("");

  const updateEmail = (email) => {
    setConfirmedEmail(email);
  };

  const handleLogout = () => {
    setConfirmedEmail(null);
  };

  return (
    <LoginContext.Provider
      value={{
        LoginForm,
        setLoginForm,
        confirmedEmail,
        updateEmail,
        handleLogout,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const LoginUser = () => {
  return useContext(LoginContext);
};
