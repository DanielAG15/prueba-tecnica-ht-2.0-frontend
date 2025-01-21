import axios from "axios";

const API_BASE_URL = "http://localhost:3001/products";

// Obtener la lista de productos
export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    throw error;
  }
};
