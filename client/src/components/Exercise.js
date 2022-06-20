import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Stack, Typography, Button } from '@mui/material';



const Exercise = () => {
  const { id } = useParams();
  const [exerciseInfo, setExerciseInfo] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8080/exercises/exercise/${id}`) 
    .then((res) => {
      console.log("Exercises:",res.data);
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

  useEffect(()=>{
    const options = {
      method: 'GET',
      url: 'https://bing-video-search1.p.rapidapi.com/videos/search',
      params: {q: `${exerciseInfo.name} exercise`},
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'bing-video-search1.p.rapidapi.com'
      }
    };
    axios.request(options).then(function (response) {
      console.log("Videos:",response.data.value)
      setExerciseVideos(response.data.value);
    }).catch(function (error) {
      console.error(error);
    });
  },[exerciseInfo.name])
  
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
    <>
      <Box sx={{ backgroundColor:'#000'}}>
        <Stack gap="60px" sx={{flexDirection: 'row', pt:"56px", pl: '20px',ml:'30px',mr:'30px', pb:'100px',alignItems: 'center' }}>
        <Box sx={{paddingTop:"145px"}}>
          <img src={exerciseInfo.gifUrl} alt={exerciseInfo.name} height="465px" loading="lazy" className="detail-image" style={{border:"5px solid #000", borderRadius:'40px'}}/>
        </Box>
        <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
          <Typography sx={{ fontSize: { lg: '44px', xs: '30px', color:"#FFF" } }} fontWeight={700} textTransform="capitalize" fontFamily="'DM Sans', sans-serif">
            {exerciseInfo.name}
          </Typography>
          <Typography sx={{ fontSize: { lg: '24px', xs: '18px'}, color:"#4F4C4C" }}  fontFamily="'DM Sans', sans-serif">
            <span style={{ textTransform: 'capitalize', fontFamily:"'DM Sans', sans-serif"}}>{exerciseInfo.name}</span> is one
            of the best exercises to target your {exerciseInfo.target}.<br /> It will help you improve your mood and gain energy.
            <br /> 
          </Typography>
          {extra?.map((item) => (
            <Stack display="flex" key={item.name} direction="row" gap="24px" alignItems="center">
              <Button disabled sx={{ background: '#000', borderRadius: '50%', width: '100px', height: '100px', border:'2px solid #FFF' }}>
                <img src={item.icon} alt={exerciseInfo.bodyPart} style={{ width: '50px', height: '50px' }} />
              </Button>
              <Typography textTransform="capitalize" fontFamily="'DM Sans', sans-serif" sx={{ fontSize: { lg: '25px', xs: '20px', color:"#4F4C4C" } }}>
                {item.name}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
      </Box>
      <Box sx={{ padding: '37px', backgroundColor:"#F3F3F3" }} p="20px" >
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }}} textAlign='center' fontFamily="'DM Sans', sans-serif" fontWeight={700} color="#000" mb="85px" mt="45px">
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{exerciseInfo.name}</span> exercise videos
      </Typography>
      <Stack display='flex' sx={{ flexDirection: { lg: 'row' }, gap: { lg: '50px', xs: '0px' },ml:'10px',mr:'10px'}} justifyContent="space-between" flexWrap="wrap" alignItems="center">
        {exerciseVideos?.slice(0, 8)?.map((item, index) => (
           
          <a
            key={index}
            className="exercise-video"
            href={item.hostPageUrl}
            target="_blank"
            rel="noreferrer"
            style={{textDecoration:"none"}}
          >
            <Box sx={{width:'300px' ,height:'300px'}}>
            <img style={{ borderRadius: '20px'}} src={item.thumbnailUrl} alt={item.name} width="300px" height="300px"/>
            </Box>
            <Box sx={{width:'300px' ,height:'150px'}}>
              <Typography sx={{ fontSize: '20px', mt:'10px', width:'300px'}} flexWrap="wrap" textAlign="left" fontFamily="'DM Sans', sans-serif"  fontWeight={600} color="#000">
                {item.name}
              </Typography>
              <Typography sx={{mt:'10px',width:'300px'}} fontFamily="'DM Sans', sans-serif" fontSize="20px" color="#000" textAlign="left">
                Created By: {item.creator ? item.creator.name : "Saurabh"}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
      
    </>
  )
}

export default Exercise;
