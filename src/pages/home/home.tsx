import { Container, Box } from '@mui/material';
import { WrappedTypography } from '@/components';
import { SlideImage } from '@/components/ImagesSlides';
import { Laptop, Mobile, Chair, Robort, Tv, Tv2 } from '@/assets/images';
import { Banner } from '@/components/Banner';
import { BannerImg } from '@/assets/images';
import { CustomSelect } from '@/components/CustomSelect';
import { useState } from 'react';

const imagesArr = [
  { url: Laptop, alt: 'Laptop computer' },
  { url: Mobile, alt: 'Mobile phone' },
  { url: Chair, alt: 'Modern chair' },
  { url: Robort, alt: 'Robot assistant' },
  { url: Tv, alt: 'Flat screen TV' },
  { url: Tv2, alt: 'Smart television' },
];

const options = [
  { value: 'MD', label: 'MD' },
  { value: 'OD', label: 'OD' },
  { value: 'Dr', label: 'Dr' },
];

export const Home = () => {
  const [designation, setDesignation] = useState('');
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
        <WrappedTypography type="h4">This is the crousle</WrappedTypography>
        <Box sx={{ width: '100%', height: 500, mt: 4 }}>
          <SlideImage images={imagesArr} autoPlay interval={5000} arrowSize="medium" />
        </Box>
      </Container>
      <Box display="flex" justifyContent="center" alignItems="center" width="100%" mb={10}>
        <CustomSelect
          label="Designation"
          value={designation}
          onHandleChange={(e) => setDesignation(e.target.value)}
          options={options}
        />
      </Box>
    </>
  );
};
