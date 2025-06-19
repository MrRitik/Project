import { Container, Typography, Box } from "@mui/material";
import styles from "../CSS/Home.module.css";
export const Home = () => {
  return (
    <Container maxWidth="md" className={styles.homeContainer}>
      <Box>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to the Home Page
        </Typography>
      </Box>
    </Container>
  );
};
