const { createServer } = require('https'); 
const express = require('express');
const path = require('path');
const compression = require('compression');
const morgan = require('morgan');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/api/name', (req, res) => {

	// Simulate data to return.
	let userObj = {
		"name": "Thomas"
	};  

  	// Return data as json
  	res.json(userObj);

  	// console.log(`Sent ${count} passwords`);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  	res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`App listening on ${port}`);