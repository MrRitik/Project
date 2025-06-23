import { Container, Typography, Box } from '@mui/material';
import { SlideImage } from '@/components/slideImage';
import { Laptop, Mobile, Chair, Robort, Tv, Tv2 } from '@/assets/images';
import { Banner } from '@/components/banner';
import { BannerImg } from '@/assets/images';
import { CustomSelect } from '@/components/customSelect';

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
      <Container maxWidth="md">
        <Typography variant="h4">This is the crousle</Typography>
        <Box sx={{ width: '100%', height: 500, mt: 4 }}>
          <SlideImage images={imagesArr} autoPlay interval={5000} arrowSize="medium" />
        </Box>
      </Container>
      <Box display="flex" justifyContent="center" alignItems="center" width="100%" mb={10}>
        <CustomSelect />
      </Box>
    </>
  );
};
