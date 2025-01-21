import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ConfirmationPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h4" gutterBottom>
        ¡Compra realizada con éxito!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Gracias por tu compra. Esperamos verte pronto.
      </Typography>
      <Button variant="contained" color="primary" onClick={() => navigate("/")}>
        Volver a la tienda
      </Button>
    </Box>
  );
};

export default ConfirmationPage;
