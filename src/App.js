import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartModal from "./components/CartModal";
import ConfirmationPage from "./pages/ConfirmationPage";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { fetchProducts } from "./services/productService";
import {
  fetchCart,
  addToCart,
  removeFromCart,
  clearCart,
} from "./services/cartService";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartModalOpen, setCartModalOpen] = useState(false);

  useEffect(() => {
    // Cargar los productos desde la API
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    loadProducts();
  }, []);

  const handleAddToCart = async (productId, quantity) => {
    try {
      await addToCart(productId, quantity);
      handleFetchCart(); // Actualiza el carrito después de agregar
    } catch (error) {
      console.error(error);
    }
  };

  const handleFetchCart = async () => {
    try {
      const data = await fetchCart();
      setCart(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemoveFromCart = async (productId) => {
    try {
      await removeFromCart(productId);
      handleFetchCart(); // Actualiza el carrito después de eliminar
    } catch (error) {
      console.error(error);
    }
  };

  const handleClearCart = async () => {
    try {
      await clearCart();
      setCart([]); // Limpia el carrito en el estado
    } catch (error) {
      console.error(error);
    }
  };

  const finalizePurchase = async () => {
    await handleClearCart(); // Vacía el carrito
    setCartModalOpen(false);
    window.location.href = "/confirmation"; // Redirige a la página de confirmación
  };

  const toggleCartModal = () => {
    setCartModalOpen(!cartModalOpen);
    if (!cartModalOpen) handleFetchCart();
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar cartCount={cart.length} toggleCartModal={toggleCartModal} />
        <Routes>
          <Route
            path="/"
            element={
              <ProductList products={products} addToCart={handleAddToCart} />
            }
          />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
        <CartModal
          open={cartModalOpen}
          onClose={toggleCartModal}
          cart={cart}
          removeFromCart={handleRemoveFromCart}
          finalizePurchase={finalizePurchase}
        />
      </Router>
    </ThemeProvider>
  );
};

export default App;
