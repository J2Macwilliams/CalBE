require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const profileRoute = require("../routes/profile");
const eventsRoute = require("../routes/events");

//Require env variables
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/profile", profileRoute);
server.use("/api/events", eventsRoute);

server.get('/', (req, res) => {
  res.send({ api: 'Ok', dbenv: process.env.DB_ENV });
});

module.exports = server;
