import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: 'primary.dark', color: 'white', padding: 2, bottom: 0, width: '100%' }}>
      <Typography variant="body2" align="center">
        Footer &copy; 2025
      </Typography>
    </Box>
  );
};

export default Footer;
