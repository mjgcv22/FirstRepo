var express = require('express');
//const surveys = require('../models/surveys');
var router = express.Router();

let mongoose = require('mongoose');
let passport = require('passport');

// enable jwt
let jwt = require('jsonwebtoken');
let DB = require('../config/db');

// create the User Model instance
let userModel = require('../models/user');
let User = userModel.User; // alias



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', page: 'home', username: req.user ? req.user.username:'' });
});

/*GET FEE page*/
router.get('/fee', function(req, res, next) {
    res.render('index', { title: 'Home', page: 'fee', username: req.user ? req.user.username:'' });
  });

  /*GET FEE whiteboard page */
router.get('/feeWhiteBoard', function(req, res, next) {
    res.render('index', { title: 'FEE WhiteBoard', page: 'feeWhiteBoard', username: req.user ? req.user.username:'' });
  });
  /*GET FEE Material Datasheets page */
  router.get('/feeDataSheet', function(req, res, next) {
    res.render('index', { title: 'FEE Material Datasheets', page: 'feeDataSheet',username: req.user ? req.user.username:'' });
  });
  /*GET FEE Job library page */
  router.get('/feeJobLibrary', function(req, res, next) {
    res.render('index', { title: 'FEE Job Library', page: 'feeJobLibrary',username: req.user ? req.user.username:'' });
  });
  /*GET FEE Engineering Procedures page */
  router.get('/feeEngineeringPro', function(req, res, next) {
    res.render('index', { title: 'FEE Engineering Procedures', page: 'feeEngineeringPro',username: req.user ? req.user.username:'' });
  });
  /*GET FEE Presentation&Articles page */
  router.get('/feePresentation', function(req, res, next) {
    res.render('index', { title: 'FEE Presentation&Articles', page: 'feePresentation',username: req.user ? req.user.username:'' });
  });
  /*GET FEE Job search page */
  router.get('/feeJobSearch', function(req, res, next) {
    res.render('index', { title: 'FEE Job Search', page: 'feeJobSearch',username: req.user ? req.user.username:'' });
  });
  // *GET FEE profile page
  router.get('/feeProfile', function(req, res, next) {
    res.render('index', { title: 'FEE Profile', page: 'feeProfile', username: req.user ? req.user.username:'' });
  });
  //*GET Customer Information page */
  router.get('/customerInfo', function(req, res, next) {
    res.render('index', { title: 'Customer Information', page: 'customerInfo',username: req.user ? req.user.username:'' });
  });

/* GET Route for displaying the login page.*/
router.get('/login', function(req, res, next) {
  // check if the user is already logged in
  if(!req.user)
  {
      res.render('index', 
      {
         title: "Login",
         page: "auth/login",
         messages: req.flash('loginMessage'),
         username: req.user ? req.user.username : '' 
      })
  }
  else
  {
      return res.redirect('/');
  }
}
);

/* GET Route for processing the login page.*/
router.post('/login', function(req, res, next) {
  passport.authenticate('local',
  (err, user, info) => {
      // server err?
      if(err)
      {
          return next(err);
      }
      // is there a user login error?
      if(!user)
      {
          req.flash('loginMessage', 'Authentication Error');
          return res.redirect('/login');
      }
      req.login(user, (err) => {
          // server error?
          if(err)
          {
              return next(err);
          }

          return res.redirect('/');
      });
  })(req, res, next);
});

/* GET Route to perform User Logout.*/
router.get('/logout', function(req, res, next) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
