//Require env variables
require('dotenv').config();

// Require
const express = require('express');
const session = require('express-session'); 
const apiRouter = require('./apiRouter.js');
const configureMiddleware = require('./configMiddleware.js');
// Config session and store
const sessionConfig = {
	name: 'sid',
	saveUninitialized: false,
	resave: false,
	secret: process.env.SESSION_SECRET,
	cookie: {
		maxAge: 1000 * 60 * 60 * 2,
		secure: process.env.NODE_ENV === 'production' ? true : false,
		sameSite: false,
		httpOnly: true
	}
}

const server = express();
server.use(session(sessionConfig));

configureMiddleware(server);

server.use('/', apiRouter);

module.exports = server;