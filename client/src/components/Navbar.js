import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';

const Navbar = () => (
  <Stack direction="row" alignItems='center' justifyContent="space-around" fontFamily="'DM Sans', sans-serif" sx={{ gap: '123px', justifyContent: 'none', backgroundColor:"#0F0F0F" , height:'80px', position:'fixed', top:0, width:'100%', zIndex:'1'}} >
    <Link to="/">
      <img src="../logo.png" alt="logo" style={{ width: '48px', height: '48px', margin: '0px 30px' }} />
    </Link>
    <Link to="/" style={{textDecoration: 'none'}}>
      <Typography variant="h6" sx={{ color: '#FFFFFF' }} textAlign="start"  fontFamily="'DM Sans', sans-serif">Home</Typography>
    </Link>
    <Link to="/exercises" style={{textDecoration: 'none'}}>
      <Typography variant="h6" sx={{ color: '#FFFFFF' }} textAlign="start"  fontFamily="'DM Sans', sans-serif">Exercises</Typography>
    </Link>
  </Stack>
);

export default Navbar;