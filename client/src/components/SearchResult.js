import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Stack, Typography } from '@mui/material';

const ResultCard = ({ result }) => (
  <Link className="result-card" to={`/exercises/exercise/${result.id}`} style={{textDecoration:"none"}}>
    <Box display='flex' flexDirection='column' justifyContent='space-between' sx={{border:'4px solid #DC3545', marginTop:1,marginBottom:1,height:'425px', width:'300px', borderRadius:'4px',backgroundColor:"#FFF", cursor:'pointer'}}>
      <img src={result.gifUrl} alt={result.name} loading="lazy" width="250px"/>
      <Stack direction="row" display='flex' justifyContent={'space-between'} alignItems='center'>
        <Button disabled sx={{ ml:"5px" , color: '#000', background: '#2BC48A', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
          {result.bodyPart}
        </Button>
        <Button disabled  sx={{ mr:"5px" ,color: '#000', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
          {result.target}
        </Button>
      </Stack>
      <hr color="#DC3545" width='300px'/>
      <Typography color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" fontFamily="'DM Sans', sans-serif" textTransform="capitalize" textAlign={'center'}>
        {result.name}
      </Typography>
    </Box>
  </Link>
);

export default ResultCard;