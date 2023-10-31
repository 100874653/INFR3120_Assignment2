
var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET About page. */
router.get('/AboutPage', function(req, res, next) {
  // render AboutPage.ejs file from views folder
  res.render('AboutPage', { title: 'About' });
});



/* GET Projects page. */
router.get('/ProjectsPage', function(req, res, next) {
  res.render('ProjectsPage', { title: 'Projects' });
});

/* GET ContactUs page. */
router.get('/ContactPage', function(req, res, next) {
  res.render('ContactPage', { title: 'ContactUs' });
});


module.exports = router;