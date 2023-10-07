import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { Parallax } from 'react-parallax';

const PromotionalBanner = () => {
  const backgroundOpacity = 0.7; // Adjust the opacity value (0 to 1) as needed

  return (
    <Parallax
      bgImage=""
      strength={400}
      blur={0}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 5, ${backgroundOpacity}), rgba(255, 255, 255, ${backgroundOpacity})), url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRftH2KvYi8AJqPb-cTYVXpxmEtWD0OjWJ5TWNM2Dd73A&s')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="py-16 text-white">
        <Container maxWidth="lg">
          <Typography variant="h4" className="text-4xl text-center md:text-left mb-4">
            Discover Our Exclusive Collection
          </Typography>
          <Typography variant="body1" className="text-lg text-center md:text-left mb-8">
            Limited-time offer: Get up to 30% off on selected products.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="/shop"
            className="py-2 px-6 text-lg mx-auto md:mx-0 block md:inline-block"
          >
            Shop Now
          </Button>
        </Container>
      </div>
    </Parallax>
  );
};

export default PromotionalBanner;
