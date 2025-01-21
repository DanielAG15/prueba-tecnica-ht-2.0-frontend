import React from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  List,
  ListItem,
  IconButton,
  Divider,
  Stack,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const CartModal = ({
  open,
  onClose,
  cart,
  removeFromCart,
  finalizePurchase,
}) => {
  // Agrupa los productos por ID
  const groupedCart = cart.reduce((acc, product) => {
    const existing = acc.find((item) => item.id === product.id);
    if (existing) {
      existing.quantity += product.quantity || 1;
    } else {
      acc.push({ ...product, quantity: product.quantity || 1 });
    }
    return acc;
  }, []);

  // Calcula el precio total
  const totalPrice = groupedCart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Tu Carrito
        </Typography>
        <List>
          {groupedCart.length === 0 ? (
            <Typography variant="body1">El carrito está vacío.</Typography>
          ) : (
            groupedCart.map((item, index) => (
              <div key={index}>
                <ListItem
                  secondaryAction={
                    <IconButton
                      edge="end"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      x{item.quantity}
                    </Typography>
                    <Typography variant="body2">
                      ${item.price * item.quantity}
                    </Typography>
                  </Stack>
                </ListItem>
                <Divider />
              </div>
            ))
          )}
        </List>
        <Typography variant="h6" sx={{ textAlign: "right", marginY: 2 }}>
          Total: ${totalPrice.toFixed(2)}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "20px" }}
          fullWidth
          onClick={finalizePurchase}
          disabled={groupedCart.length === 0}
        >
          Finalizar Compra
        </Button>
      </Box>
    </Modal>
  );
};

export default CartModal;
