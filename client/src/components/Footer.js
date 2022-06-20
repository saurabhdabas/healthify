import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Stack, Typography } from '@mui/material';

const Footer = () => (
  <Box height='200px' bgcolor="#F3F3F3" pt="41px">
    <Stack direction='row' gap="10px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src="./logo.png" alt="logo" style={{ width: '48px', height: '48px' }} />
      <Typography variant="h5" color="#FF2625" sx={{ fontSize: '28px'}} textAlign="center" fontFamily="'pacifico', cursive">Healthify</Typography>
    </Stack>
    <hr   style={{marginLeft: '40px',
    marginRight: '40px'}}/>
    <Stack direction='row' gap="10px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" >
      <Typography variant="h5" sx={{ fontSize:'18px'}} mt="41px" textAlign="start" pb="40px" fontFamily="'DM Sans', sans-serif">Follow me</Typography>
      <a href="https://www.linkedin.com/in/saurabh-dabas-a3617b15a/" style={{textDecoration: 'none'}}>
        <img src="./linkedin.png" alt="logo" style={{ width: '28px', height: '24px', cursor:'pointer' }} />
      </a>
      <a href="https://github.com/saurabhdabas/" style={{textDecoration: 'none'}}>
        <img src="./github.png" alt="logo" style={{ width: '28px', height: '28px', cursor:'pointer' }} />
      </a>
      <Typography variant="h5" sx={{ fontSize:'18px'}} mt="41px" ml='450px' textAlign="center" pb="40px" fontFamily="'DM Sans', sans-serif">Made with ❤️ by Saurabh Dabas</Typography>
    </Stack>
  </Box>
);

export default Footer;