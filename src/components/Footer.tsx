import { Box, Typography, Container } from "@mui/material";
import Style from "../CSS/Footer.module.css";

const Footer = () => {
  return (
    <Box component="footer" className={Style.footer}>
      <Container maxWidth="lg" className={Style.container}>
        <Typography variant="body2" className={Style.text}>
          © {new Date().getFullYear()} Ritik. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
