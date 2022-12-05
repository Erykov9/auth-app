const express = require('express');
const router = express.Router();

router.get('/logged', (req, res) => {
  if(req.user) res.render('logged', {
    name: req.user.displayName,
    img: req.user.photos[0].value,
  });
  else res.render('noPermission')
});

router.get('/profile', (req, res) => {
  if(req.user) res.render('profile');
  else res.render('noPermission');
});

router.get('/profile/settings', (req, res) => {
  if(req.user) res.render('profileSettings');
  else res.render('noPermission');
});

router.get('/logout', (req, res) => {
  res.render('logout');
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});


module.exports = router;