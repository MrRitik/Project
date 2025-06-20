import { Container, Typography, Box } from '@mui/material';
import styles from '@/CSS/Home.module.css';
import { SlideImage } from '@/components/slideImage';
import { Laptop, Mobile, Chair, Robort, Tv, Tv2 } from '@/assets/images';
import { Banner } from '@/components/banner';
import { BannerImg } from '@/assets/images';
const imagesArr = [
  { url: Laptop, alt: 'Laptop computer' },
  { url: Mobile, alt: 'Mobile phone' },
  { url: Chair, alt: 'Modern chair' },
  { url: Robort, alt: 'Robot assistant' },
  { url: Tv, alt: 'Flat screen TV' },
  { url: Tv2, alt: 'Smart television' },
];
export const Home = () => {
  return (
    <>
      <Box width={'100%'}>
        <Banner
          imageUrl={BannerImg}
          title="Welcome to Our Store"
          subtitle="Discover our new collection"
          ctaText="Shop Now"
          onClick={() => alert('Clicked')}
          overlayColor="#333333"
          overlayOpacity={0.4}
          height="500px"
        />
      </Box>
      <Container maxWidth="md" className={styles.homeContainer}>
        <Typography variant='h4' >
            This is the crousle
        </Typography>
        <Box sx={{ width: '100%', height: 500, mt: 4 }}>
          <SlideImage images={imagesArr} autoPlay interval={5000} arrowSize="medium" />
        </Box>
      </Container>
    </>
  );
};
