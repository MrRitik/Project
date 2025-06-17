import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "../CSS/Nav.module.css";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isLargeUp = useMediaQuery(theme.breakpoints.up("lg")); // true for lg and up

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const navItems = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
    { text: "Profile", path: "/profile" },
  ];

  return (
    <>
      <AppBar position="static" className={styles.appBar}>
        <Toolbar className={styles.toolbar}>
          {/* Logo links to Home */}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            className={styles.logo}
          >
            MyLogo
          </Typography>

          {/* Spacer to push nav to the right */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop Nav (visible only on lg and up) */}
          {isLargeUp && (
            <Box className={styles.links}>
              {navItems.map((item) => (
                <Button
                  key={item.text}
                  component={Link}
                  to={item.path}
                  color="inherit"
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          )}

          {/* Menu icon for small/medium screens */}
          {!isLargeUp && (
            <IconButton
              edge="end"
              color="inherit"
              onClick={toggleDrawer(true)}
              className={styles.menuButton}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          sx={{ width: 300 }}
        >
          <List>
            {navItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={Link} to={item.path}>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default NavBar;
