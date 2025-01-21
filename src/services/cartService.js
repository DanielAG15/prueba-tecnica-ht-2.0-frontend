import axios from "axios";

const API_BASE_URL = "http://localhost:3001/cart";

// Obtener los productos del carrito
export const fetchCart = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el carrito:", error);
    throw error;
  }
};

// Agregar productos al carrito
export const addToCart = async (productId, quantity) => {
  try {
    await axios.post(API_BASE_URL, { productId, quantity });
  } catch (error) {
    console.error("Error al agregar al carrito:", error);
    throw error;
  }
};

// Eliminar un producto del carrito
export const removeFromCart = async (productId) => {
  try {
    await axios.post(`${API_BASE_URL}/remove`, { productId });
  } catch (error) {
    console.error("Error al eliminar producto del carrito:", error);
    throw error;
  }
};

// Vaciar el carrito
export const clearCart = async () => {
  try {
    await axios.delete(API_BASE_URL);
  } catch (error) {
    console.error("Error al vaciar el carrito:", error);
    throw error;
  }
};
