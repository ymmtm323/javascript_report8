var express = require('express');
const request = require('request');
var router = express.Router();


/* GET home page. */
router.get('/', async (req, res) => {
  request('https://dog.ceo/api/breeds/image/random', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.json(data);
    }
  });
});

module.exports = router;
