import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "../CSS/Nav.module.css";


const isAuthenticated = true;
const userRole = "admin"; 

const NavBar = () => {
  const navItems = [
    { text: "Home", path: "/" },
    { text: "About", path: "/about" },
  ];

  if (isAuthenticated) {
    navItems.push({ text: "Dashboard", path: "/dashboard" });
  }

  if (isAuthenticated && ["admin", "manager"].includes(userRole)) {
    navItems.push({ text: "Profile", path: "/profile" });
  }

  return (
    <AppBar position="static" className={styles.appBar}>
      <Toolbar className={styles.toolbar}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          className={styles.logo}
        >
          MyLogo
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

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
          <Button
            component={Link}
            to={isAuthenticated ? "/login" : "/login"}
            color="inherit"
          >
            {isAuthenticated ? "Logout" : "Login"}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
