var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const flag = true;
  res.render('index', { title: 'VitalAirSense', flag });
});

module.exports = router;
