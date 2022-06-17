const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();

/* GET videos page. */
router.get('/', function(req, res, next) {
  const options = {
    method: 'GET',
    params: {
      id: 'YQHsXMglC9A'
    },
    url: 'https://youtube-search-and-download.p.rapidapi.com/video/related',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  axios.request(options).then(function (response) {
    res.json(response.data)
  }).catch(function (error) {
    console.error(error);
  });
  // res.send('respond with a resource');
});

module.exports = router;
