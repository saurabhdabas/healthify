const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();

/* GET exercises/:id page. */
router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  const options = {
    method: 'GET',
    url:`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    },
  };
  axios.request(options).then(function (response) {
    console.log("response:",response.data)
    res.json(response.data)
  }).catch(function (error) {
    console.error(error);
  });
  
});

module.exports = router;
