import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "./MenuBar.css";

const MenuBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight); // Set to true after scrolling past the HeroSection
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      className={`menu-bar ${isScrolled ? "scrolled" : ""}`}
    >
      <Toolbar className="toolbar">
        <Typography variant="h6" className="logo">
          CPA Landing
        </Typography>
        <div className="desktop-menu">
          <Button component={Link} to="/" color="inherit">
            Home
          </Button>
          <Button component={Link} to="/about" color="inherit">
            About
          </Button>
          <Button component={Link} to="/contact" color="inherit">
            Contact
          </Button>
          <Button component={Link} to="/offers" color="inherit">
            Offers
          </Button>
        </div>
        <div className="mobile-menu">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem component={Link} to="/" onClick={handleMenuClose}>
              Home
            </MenuItem>
            <MenuItem component={Link} to="/about" onClick={handleMenuClose}>
              About
            </MenuItem>
            <MenuItem component={Link} to="/contact" onClick={handleMenuClose}>
              Contact
            </MenuItem>
            <MenuItem component={Link} to="/offers" onClick={handleMenuClose}>
              Offers
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default MenuBar;
