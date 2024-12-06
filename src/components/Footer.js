import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => (
  <Box
    sx={{
      backgroundColor: 'primary.main',
      color: 'white',
      textAlign: 'center',
      p: 2,
    }}
  >
    <Typography variant="body2">
      © {new Date().getFullYear()} CPA Landing Page. All rights reserved.
    </Typography>
    <Typography variant="body2">
      <Link href="#" color="inherit" underline="hover">
        Privacy Policy
      </Link>{' '}
      |{' '}
      <Link href="#" color="inherit" underline="hover">
        Terms of Service
      </Link>
    </Typography>
  </Box>
);

export default Footer;

