import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = ({ cartCount, toggleCartModal }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        Tienda de Productos
      </Typography>
      <IconButton color="inherit" onClick={toggleCartModal}>
        <Badge badgeContent={cartCount} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default Navbar;
