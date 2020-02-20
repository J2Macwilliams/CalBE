const router = require('express').Router();
const googleUtil = require('../utils/google-util');


require('dotenv').config();

// Redirect for authentication uri
router.get('/login', (req, res) => {
  res.redirect(googleUtil.urlGoogle());
});

// callback route for google redirect
router.get('/success',  (req, res) => {
  // TODO: Should check if needed
  // TODO: change to environment variable
  res.redirect(`https://d8picker.netlify.com/redirect`);
});

// Delete session and logout
// Should redirect on the front end
router.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      console.log(err);
      // res.redirect("/");
    }
    res.clearCookie('sid');
    // res.redirect("/");
  });
});

module.exports = router;
