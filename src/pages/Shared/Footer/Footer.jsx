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

const footerStyle = {
  background: 'linear-gradient(to bottom, rgb(125, 60, 152), black)',
  color: '#fff',
  padding: '32px 0',
  textAlign: 'center',
  animation: 'fadeIn 2s',
};

const iconStyle = {
  color: 'white',
  marginRight: '16px',
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" style={{ marginBottom: '16px' }}>
              Contact Us
            </Typography>
            <Typography variant="body2" style={{ marginBottom: '8px' }}>
              Email: info@example.com
            </Typography>
            <Typography variant="body2" style={{ marginBottom: '8px' }}>
              Phone: +1 (123) 456-7890
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" style={{ marginBottom: '16px' }}>
              Quick Links
            </Typography>
            <Link href="/about" color="inherit" style={{ display: 'block', marginBottom: '8px' }}>
              About Us
            </Link>
            <Link href="/products" color="inherit" style={{ display: 'block', marginBottom: '8px' }}>
              Products
            </Link>
            <Link href="/contact" color="inherit" style={{ display: 'block', marginBottom: '8px' }}>
              Contact Us
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" style={{ marginBottom: '16px' }}>
              Support
            </Typography>
            <Link href="/faq" color="inherit" style={{ display: 'block', marginBottom: '8px' }}>
              FAQ
            </Link>
            <Link href="/shipping" color="inherit" style={{ display: 'block', marginBottom: '8px' }}>
              Shipping
            </Link>
            <Link href="/returns" color="inherit" style={{ display: 'block', marginBottom: '8px' }}>
              Returns
            </Link>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" style={{ marginBottom: '16px' }}>
              Follow Us
            </Typography>
            <Grid container spacing={2}>
              <Grid item>
                <IconButton
                  component={Link}
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener"
                  style={iconStyle}
                >
                  <FacebookIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  component={Link}
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener"
                  style={iconStyle}
                >
                  <TwitterIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  component={Link}
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener"
                  style={iconStyle}
                >
                  <InstagramIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
