import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

const Navbar = () => (
  <Stack direction="row" alignItems='center' justifyContent="space-around" fontFamily="'DM Sans', sans-serif" sx={{ gap: '123px', justifyContent: 'none', backgroundColor:"#0F0F0F" , height:'80px'}} >
    {/* <Link to="/">
      <img src="../logo.png" alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
    </Link> */}
    <img src="../logo.png" alt="logo" style={{ width: '48px', height: '48px', margin: '0px 30px' }} />
    <a href="#exercises" style={{ textDecoration: 'none', color: '#FFFFFF' }}>Home</a>
    <a href="#exercises" style={{ textDecoration: 'none', color: '#FFFFFF' }}>Exercises</a>

    {/* <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link> */}
  </Stack>
);

export default Navbar;