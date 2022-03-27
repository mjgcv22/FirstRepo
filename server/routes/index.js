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
router.get('/FEE', function(req, res, next) {
  res.render('index', { title: 'FEE', page: 'fee' });
});
/*GET FEE whiteboard page */
router.get('/feeWhiteBoard', function(req, res, next) {
  res.render('index', { title: 'FEE WhiteBoard', page: 'feeWhiteBoard' });
});
/*GET FEE Material Datasheets page */
router.get('/feeDataSheet', function(req, res, next) {
  res.render('index', { title: 'FEE Material Datasheets', page: 'feeDataSheet' });
});
/*GET FEE Job library page */
router.get('/feeJobLibrary', function(req, res, next) {
  res.render('index', { title: 'FEE Job Library', page: 'feeJobLibrary' });
});
/*GET FEE Engineering Procedures page */
router.get('/feeEngineeringPro', function(req, res, next) {
  res.render('index', { title: 'FEE Engineering Procedures', page: 'feeEngineeringPro' });
});
/*GET FEE Presentation&Articles page */
router.get('/feePresentation', function(req, res, next) {
  res.render('index', { title: 'FEE Presentation&Articles', page: 'feePresentation' });
});
/*GET FEE Job search page */
router.get('/feeJobSearch', function(req, res, next) {
  res.render('index', { title: 'FEE Job Search', page: 'feeJobSearch' });
});
// *GET FEE profile page
router.get('/feeProfile', function(req, res, next) {
  res.render('index', { title: 'FEE Profile', page: 'feeProfile' });
});

/* GET login page. */



module.exports = router;

