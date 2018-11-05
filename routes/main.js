// var express = require('express')
// var router = express.Router()

// router.get('/main', (req, res, next)=> {
// 	res.render('main', { name: 'sxl' })
// })
// module.exports = router;
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('main', { name: 'main' });
});

/* GET users listing. */
router.get('/asd', function(req, res, next) {
  res.render('login', { name: 'asd' });
});

module.exports = router;
