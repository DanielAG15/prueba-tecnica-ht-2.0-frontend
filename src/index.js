import React from "react";
import ReactDOM from "react-dom/client"; // Importa desde 'react-dom/client'
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // Crea el root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
