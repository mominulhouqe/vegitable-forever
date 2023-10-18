import React from 'react';
import {
  Typography,
  Grid,
  Container,
  Link,
  IconButton,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Copyright from './Copyright';
import Subscribe from './Subscribe';

const footerStyle = {
  background: '',
  color: '#333',
  padding: '32px 0',
};

const iconStyle = {
  color: '#333',
  marginRight: '16px',
};

const Footer = () => {
  return (
    <footer style={footerStyle} className='bg-base-100'>
      <Container maxWidth="lg" >
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 py-6 container mx-auto">
          <div className="mb-6">
            <Typography variant="h6" className="mb-4">
              Contact Us
            </Typography>
            <Typography variant="body2" className="mb-2">
              Email: info@example.com
            </Typography>
            <Typography variant="body2" className="mb-2">
              Phone: +1 (123) 456-7890
            </Typography>
          </div>
          <div className="mb-6">
            <Typography variant="h6" className="mb-4">
              Quick Links
            </Typography>
            <Link href="/about" color="inherit" className="mb-2 block">
              About Us
            </Link>
            <Link href="/products" color="inherit" className="mb-2 block">
              Products
            </Link>
            <Link href="/contact" color="inherit" className="mb-2 block">
              Contact Us
            </Link>
          </div>
          <div className="mb-6">
            <Typography variant="h6" className="mb-4">
              Support
            </Typography>
            <Link href="/faq" color="inherit" className="mb-2 block">
              FAQ
            </Link>
            <Link href="/shipping" color="inherit" className="mb-2 block">
              Shipping
            </Link>
            <Link href="/returns" color="inherit" className="mb-2 block">
              Returns
            </Link>
          </div>
          <div className="mb-6">
            <Typography variant="h6" className="mb-4">
              Follow Us
            </Typography>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <IconButton
                  component={Link}
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener"
                  style={iconStyle}
                >
                  <FacebookIcon />
                </IconButton>
              </div>
              <div>
                <IconButton
                  component={Link}
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener"
                  style={iconStyle}
                >
                  <TwitterIcon />
                </IconButton>
              </div>
              <div>
                <IconButton
                  component={Link}
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener"
                  style={iconStyle}
                >
                  <InstagramIcon />
                </IconButton>
              </div>

            </div>
          </div>
          <div className='mb-6'>

            <Subscribe />
          </div>
        </div>
      </Container>

      <hr />

      <Copyright />
    </footer>
  );
};

export default Footer;
