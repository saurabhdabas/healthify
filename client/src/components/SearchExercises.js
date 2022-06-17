import React,{useState} from 'react';
import { Box, Button, Stack, TextField, Typography, Grid } from '@mui/material';
import ResultCard from './SearchResult';
import {searchFilter} from '../utils/searchFilter';

const SearchExercises = ({response}) => {

  const [search, setSearch] = useState('');

  const [results, setSearchResults] = useState([]);

  const handleSearch = () => {
    setSearchResults(searchFilter(response,search).splice(0,18))
  }
  console.log("Results:",results);
  return (
    <>
    <Stack alignItems="center" mt="37px"  justifyContent="center" p="20px"  sx={{backgroundColor:"#F3F3F3"}}>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mt="49px" mb="49px" textAlign="center" fontFamily="'DM Sans', sans-serif">
      Find exercises to reach your fitness goals faster
      </Typography>
      <Box position="relative" mb="50px">
        <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px', fontFamily:"'DM Sans', sans-serif" }, width: { lg: '1170px', xs: '350px' },fontFamily:"'DM Sans', sans-serif", backgroundColor: '#FFFFFF', borderRadius: '4px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button className="search-btn" sx={{ margin:'5px',bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: '173px', height: '44px',borderRadius:'4px', position: 'absolute', right: '0px', fontSize: '20px',fontFamily:"'DM Sans', sans-serif" }}  onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '1170px', p: '20px' }}>

      <Grid container display='flex' justifyContent='space-between' sx={{columnGap:'100px'}}>
        <Stack alignItems='center' direction='column' spacing='1px' sx={{cursor:'pointer'}}>
          <Typography fontWeight={700} sx={{ fontSize: '16px', mb:'5px' }} textAlign="center" fontFamily="'DM Sans', sans-serif">Back</Typography>
          <Box sx={{border:'2px solid black', borderRadius:"4px",width:"152px" ,height:"152px"}}>
            <img src="../back.jpeg" alt="back" width="152px" height="152px"/>
          </Box>
        </Stack>
        <Stack alignItems='center' direction='column' spacing='1px' sx={{cursor:'pointer'}}>
          <Typography fontWeight={700} sx={{ fontSize: '16px', mb:'5px' }} textAlign="center" fontFamily="'DM Sans', sans-serif">Chest</Typography>
          <Box sx={{border:'2px solid black', borderRadius:"4px",width:"152px" ,height:"152px"}}>
            <img src="../chest.jpeg" alt="back" width="152px" height="152px"/>
          </Box>
        </Stack>
        <Stack alignItems='center' direction='column' spacing='1px' sx={{cursor:'pointer'}}>
          <Typography fontWeight={700} sx={{ fontSize: '16px', mb:'5px' }} textAlign="center" fontFamily="'DM Sans', sans-serif">Lower arms</Typography>
          <Box sx={{border:'2px solid black', borderRadius:"4px",width:"152px" ,height:"152px"}}>
            <img src="../lowerarms.jpeg" alt="back" width="152px" height="152px"/>
          </Box>
        </Stack>
        <Stack alignItems='center' direction='column' spacing='1px' sx={{cursor:'pointer'}}>
          <Typography fontWeight={700} sx={{ fontSize: '16px', mb:'5px' }} textAlign="center" fontFamily="'DM Sans', sans-serif">Lower legs</Typography>
          <Box sx={{border:'2px solid black', borderRadius:"4px",width:"152px" ,height:"152px"}}>
            <img src="../lowerlegs.jpeg" alt="back" width="152px" height="152px"/>
          </Box>
        </Stack>
        <Stack  alignItems='center' direction='column' spacing='1px' sx={{cursor:'pointer', mt:'20px', mb:"20px"}}>
          <Typography fontWeight={700} sx={{ fontSize: '16px', mb:'5px'}} textAlign="center" fontFamily="'DM Sans', sans-serif">Neck</Typography>
          <Box sx={{border:'2px solid black', borderRadius:"4px",width:"152px" ,height:"152px"}}>
            <img src="../neck.jpeg" alt="back" width="152px" height="152px"/>
          </Box>
        </Stack>
        <Stack alignItems='center' direction='column' spacing='1px' sx={{cursor:'pointer', mt:'20px', mb:"20px"}}>
          <Typography fontWeight={700} sx={{ fontSize: '16px', mb:'5px' }} textAlign="center" fontFamily="'DM Sans', sans-serif">Shoulders</Typography>
          <Box sx={{border:'2px solid black', borderRadius:"4px",width:"152px" ,height:"152px"}}>
            <img src="../shoulders.jpeg" alt="back" width="152px" height="152px"/>
          </Box>
        </Stack>
        <Stack alignItems='center' direction='column' spacing='1px' sx={{cursor:'pointer', mt:'20px', mb:"20px" }}>
          <Typography fontWeight={700} sx={{ fontSize: '16px', mb:'5px'}} textAlign="center" fontFamily="'DM Sans', sans-serif">Upper arms</Typography>
          <Box sx={{border:'2px solid black', borderRadius:"4px",width:"152px" ,height:"152px"}}>
            <img src="../upperarms.jpeg" alt="back" width="152px" height="152px"/>
          </Box>
        </Stack>
        <Stack alignItems='center' direction='column' spacing='1px' sx={{cursor:'pointer', mt:'20px', mb:"20px" }}>
          <Typography fontWeight={700} sx={{ fontSize: '16px', mb:'5px'}} textAlign="center" fontFamily="'DM Sans', sans-serif">Upper legs</Typography>
          <Box sx={{border:'2px solid black', borderRadius:"4px",width:"152px" ,height:"152px"}}>
            <img src="../upperlegs.jpeg" alt="back" width="152px" height="152px"/>
          </Box>
        </Stack>
      </Grid>
      </Box>
    </Stack>
    {results.length ?     <Stack alignItems="center" justifyContent="center" p="20px"  sx={{backgroundColor:"#000"}}>
      <Box sx={{ position: 'relative', width: '1170px', p: '20px'}}>
      <Typography variant="h4" fontWeight="bold" fontFamily="'DM Sans', sans-serif" sx={{ fontSize:'44px'}} mb="46px" color="#FFF">Showing Results</Typography>
      <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center" maxHeight="900px" overflow="scroll" scrollbarcolor='#DC3545'>
      {results.map((result)=>{
            return <ResultCard key={result.id} result={result}/>
          })}
      </Stack>
      </Box>
    </Stack>  : ""}

    </>
  )
}

export default SearchExercises;
