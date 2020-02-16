const express = require("express");
const { google } = require("googleapis");
const googleCalenderService = require("../services/google-calendar.service");

const router = express.Router();

// Get Events
router.get("/", async (req, res) => {
  // check for valid session
  if (req.session.user) {
    console.log('events session',re.session.user)
    // get oauth2 client
    const oauth2Client = new google.auth.OAuth2();
    oauth2Client.setCredentials({
      access_token: req.session.user.accessToken
    });

    // get calendar events by passing oauth2 client
    googleCalenderService.listEvents(oauth2Client, events => {
      console.log('events BE:',events);

      const data = {
        ...req.session.user,
        events: events
      };
      // console.log('events',data);
      res.json(data);
    });
  } else {
    // Should check for session on front end and redirect
    res.json({ message: "Not Authorized" });
  }
});

module.exports = router;
