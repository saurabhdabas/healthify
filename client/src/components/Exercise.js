import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Stack, Typography, Button } from '@mui/material';

const Exercise = () => {
  const { id } = useParams();
  const [exerciseInfo, setExerciseInfo] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:8080/exercises/exercise/${id}`) 
    .then((res) => {
      console.log("res:",res);
      setExerciseInfo((prev)=>({ ...prev,
        bodyPart: res.data.bodyPart,
        equipment: res.data.equipment,
        gifUrl: res.data.gifUrl,
        id: res.data.id,
        name: res.data.name,
        target: res.data.target
      }))
      }
    )
    .catch((err)=>console.log(err));
  },[id]);
 
  const extra = [
    {
      icon: "/bodyPart.jpeg",
      name: exerciseInfo.bodyPart,
    },
    {
      icon: "/target.png",
      name: exerciseInfo.target,
    },
    {
      icon:"/bodyWeight.png",
      name: exerciseInfo.equipment,
    },
  ];
  return (
    <Box sx={{ backgroundColor:'#F3F3F3'}}>
      <Stack gap="60px" sx={{flexDirection: 'row', pt:"55px", pl: '20px',ml:'30px', pb:'100px',alignItems: 'center' }}>
      <Box sx={{paddingTop:"145px"}}>
        <img src={exerciseInfo.gifUrl} alt={exerciseInfo.name} height="465px" loading="lazy" className="detail-image" style={{border:"5px solid #000"}}/>
      </Box>
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize" fontFamily="'DM Sans', sans-serif">
          {exerciseInfo.name}
        </Typography>
        <Typography sx={{ fontSize: { lg: '24px', xs: '18px'} }} color="#4F4C4C" fontFamily="'DM Sans', sans-serif">
          <span style={{ textTransform: 'capitalize', fontFamily:"'DM Sans', sans-serif"}}>{exerciseInfo.name}</span> is one
          of the best exercises to target your {exerciseInfo.target}.<br /> It will help you improve your mood and gain energy.
          <br /> 
        </Typography>
        {extra?.map((item) => (
          <Stack display="flex" key={item.name} direction="row" gap="24px" alignItems="center">
            <Button disabled sx={{ background: '#000', borderRadius: '50%', width: '100px', height: '100px' }}>
              <img src={item.icon} alt={exerciseInfo.bodyPart} style={{ width: '50px', height: '50px' }} />
            </Button>
            <Typography textTransform="capitalize" fontFamily="'DM Sans', sans-serif" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
    </Box>
  )
}

export default Exercise;
