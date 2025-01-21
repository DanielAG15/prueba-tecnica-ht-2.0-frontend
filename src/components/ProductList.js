import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  TextField,
  Box,
} from "@mui/material";

const ProductList = ({ products, addToCart }) => {
  const [quantities, setQuantities] = useState(
    products.reduce((acc, product) => ({ ...acc, [product.id]: 1 }), {})
  );

  const handleQuantityChange = (id, value) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, parseInt(value) || 1), // Evita cantidades menores a 1
    }));
  };

  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px" }}
    >
      {products.map((product) => (
        <Card key={product.id} sx={{ width: 300 }}>
          <CardMedia
            component="img"
            height="150"
            image={product.image}
            alt={product.name}
          />
          <CardContent>
            <Typography variant="h6">{product.name}</Typography>
            <Typography color="text.secondary">${product.price}</Typography>
            <Typography variant="body2">{product.description}</Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                marginTop: 2,
              }}
            >
              <TextField
                type="number"
                size="small"
                value={quantities[product.id]}
                onChange={(e) =>
                  handleQuantityChange(product.id, e.target.value)
                }
                sx={{ width: 80 }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={() => addToCart(product.id, quantities[product.id])}
              >
                Añadir al carrito
              </Button>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default ProductList;
