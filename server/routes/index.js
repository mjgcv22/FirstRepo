var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', page: 'home' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Login', page: 'login' });
});

/*GET FEE page */
/* GET login page. */
router.get('/FEE', function(req, res, next) {
  res.render('index', { title: 'FEE', page: 'fee' });
});


module.exports = router;

