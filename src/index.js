import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import initializeDb from './db';
import middleware from './middleware';
import api from './api';
import config from './config.json';
let app = express();
const server = http.createServer(app);

// 3rd party middleware
app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
	limit : config.bodyLimit
}));

// connect to db
initializeDb( db => {
	// internal middleware
	app.use(middleware({ config, db }));
	// api router
	app.use('/api', api({ config, db }));

	server.listen(process.env.PORT || config.port);

	server.on("error", (err) => {
		console.error("Server error:\n", err);
	});

	if (server.address()) console.log(`Started on port ${server.address().port}`);
});

export default app;
