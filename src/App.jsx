import Header from "./Components/Header";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro";
import Carrinho from "./Pages/Carrinho";
import { CartProvider } from "./contexts/CartContext";

const App = () => {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <Header />
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/carrinho" element={<Carrinho />} />
          </Routes>
        <Footer />
      </BrowserRouter>
      </CartProvider>
    </>
  );
};

export default App;
