import { Box, Container, Typography } from '@mui/material';
import { footerBox, footerContainer, footerText } from './styles';

export const Footer = () => {
  return (
    <Box component="footer" sx={footerBox}>
      <Container maxWidth="lg" sx={footerContainer}>
        <Typography variant="body2" sx={footerText}>
          © {new Date().getFullYear()} Ritik. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};
