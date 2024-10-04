/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Criação do contexto
const CartContext = createContext();

// Provedor para envolver a aplicação
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeItemFromCart = (size) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.size !== size));
  };

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/");
    }
  }, [cartItems, navigate]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

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

// parte geral especial para login e cadastro

export const LoginContext = createContext();

export const LoginProvider = ({ children, openAll }) => {
  const [confirmedEmail, setConfirmedEmail] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(true);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  // const navigate = useNavigate();

  // verifica se o usuario esta logado e desabilita o clice do botão de login

  useEffect(() => {
    if (confirmedEmail) {
      setShowLoginModal(false);
    } else {
      setShowLoginModal(true);
    }
  }, [confirmedEmail]);

  // parte geral especial para login

  const [LoginForm, setLoginForm] = useState({
    email: "",
    senha: "",
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(LoginForm);
    updateEmail(LoginForm.email);
    setLoginForm({
      email: "",
      senha: "",
    });
    openAll();
    const usuarioLogado = true;
    console.log("usuario logado", usuarioLogado);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setLoginForm((prevForm) => ({
      ...prevForm,
      [id]: value,
    }));
  };

  // Parte geral especial para o cadastro

  const [errorMessage, setErrorMessage] = useState("");
  const [RegisterForm, setRegisterForm] = useState({
    emailRegister: "",
    senhaRegister: "",
    confirmeSenha: "",
  });

  const handleInputChangeRegister = (e) => {
    const { id, value } = e.target;
    setRegisterForm((prevForm) => ({
      ...prevForm,
      [id]: value,
    }));
  };

  const handleFormRegisterSubmit = (event) => {
    event.preventDefault();

    const { senhaRegister, confirmeSenha } = RegisterForm;

    if (senhaRegister !== confirmeSenha) {
      setErrorMessage("As senhas não coincidem.");
      return;
    }
    if (senhaRegister.length < 5 || confirmeSenha.length < 5) {
      setErrorMessage("A senha deve ter pelo menos 5 caracteres.");
      return;
    }

    console.log("Formulário de cadastro enviado com sucesso!");
    setErrorMessage("");

    console.log(RegisterForm);

    updateEmail(RegisterForm.emailRegister);
    setRegisterForm({
      emailRegister: "",
      senhaRegister: "",
      confirmeSenha: "",
    });

    openAll();
    const usuarioLogado = true;
    console.log("usuario logado", usuarioLogado);
  };

  // Funções para abrir e fechar os modais e atualizar o email

  const updateEmail = (email, emailRegister) => {
    if (email) {
      setConfirmedEmail(email);
    } else if (emailRegister) {
      setConfirmedEmail(emailRegister);
    }
  };

  const handleLogout = () => {
    setConfirmedEmail(null);
    const usuarioLogado = false;
    console.log("usuario logado", usuarioLogado);
  };

  const handleLogOutAndRedirect = () => {
    handleLogout();
    navigate("/");
  };

  const handleOpenRegisterModal = () => {
    setShowLoginModal(false);
    setShowRegisterModal(true);
  };

  const handleCloseRegisterModal = () => {
    setShowRegisterModal(false);
    setShowLoginModal(true);
  };

  const handleContainerClick = (event) => {
    if (event.target === event.currentTarget) {
      openAll();
    }
  };

  // segunda tela

  const [showLoginModalIdnt, setShowLoginModalIdnt] = useState(false);
  const [showRegisterModalIdent, setShowRegisterModalIdent] = useState(false);
  const [errorMessageIdent, setErrorMessageIdent] = useState("");
  const navigate = useNavigate();

  // Funções para abrir e fechar os modais
  const handleOpenLoginModalIdent = () => {
    setShowLoginModalIdnt(true);
    setShowRegisterModalIdent(false);
  };

  const handleOpenRegisterModalIdent = () => {
    setShowRegisterModalIdent(true);
    setShowLoginModalIdnt(false);
  };

  const handleCloseModalIdent = () => {
    setShowLoginModalIdnt(false);
    setShowRegisterModalIdent(false);
  };

  const handleInputChangeIdent = (e) => {
    const { id, value } = e.target;
    setLoginForm((prevForm) => ({
      ...prevForm,
      [id]: value,
    }));
  };

  const handleFormSubmitIdent = (event) => {
    event.preventDefault();
    console.log(LoginForm);
    updateEmail(LoginForm.email);
    setLoginForm({
      email: "",
      senha: "",
    });
    handleCloseModalIdent();
    navigate("/payment");
  };

  const handleInputChangeRegisterIdent = (e) => {
    const { id, value } = e.target;
    setRegisterForm((prevForm) => ({
      ...prevForm,
      [id]: value,
    }));
  };

  const handleFormRegisterSubmitIdent = (event) => {
    event.preventDefault();

    const { senhaRegister, confirmeSenha } = RegisterForm;

    if (senhaRegister !== confirmeSenha) {
      setErrorMessageIdent("As senhas não coincidem.");
      return;
    }
    if (senhaRegister.length < 5 || confirmeSenha.length < 5) {
      setErrorMessageIdent("A senha deve ter pelo menos 5 caracteres.");
      return;
    }

    console.log("Formulário de cadastro enviado com sucesso!");
    setErrorMessageIdent("");

    console.log(RegisterForm);

    updateEmail(RegisterForm.emailRegister);
    setRegisterForm({
      emailRegister: "",
      senhaRegister: "",
      confirmeSenha: "",
    });
    handleCloseModalIdent();
    navigate("/payment");
  };

  const handleContainerClickIdent = (event) => {
    if (event.target === event.currentTarget) {
      handleCloseModalIdent();
    }
  };

  const [redirected, setRedirected] = useState(false);
  const { cartItems } = useCart();

  useEffect(() => {
    if (cartItems.length > 0 && confirmedEmail && !redirected) {
      navigate("/payment");
      setRedirected(true);
    }
  }, [cartItems, confirmedEmail, redirected, navigate]);

  return (
    <LoginContext.Provider
      value={{
        LoginForm,
        setLoginForm,
        confirmedEmail,
        updateEmail,
        handleLogout,
        RegisterForm,
        setRegisterForm,
        showLoginModal,
        showRegisterModal,
        handleOpenRegisterModal,
        handleCloseRegisterModal,
        handleFormSubmit,
        handleInputChange,
        handleInputChangeRegister,
        errorMessage,
        handleFormRegisterSubmit,
        handleContainerClick,
        handleLogOutAndRedirect,

        showLoginModalIdnt,
        showRegisterModalIdent,
        errorMessageIdent,
        handleOpenLoginModalIdent,
        handleOpenRegisterModalIdent,
        handleCloseModalIdent,
        handleInputChangeIdent,
        handleFormSubmitIdent,
        handleInputChangeRegisterIdent,
        handleFormRegisterSubmitIdent,
        handleContainerClickIdent,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const LoginUser = () => {
  return useContext(LoginContext);
};
