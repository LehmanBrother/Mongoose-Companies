const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost/test';
//mongodb://localhost - this is where our mongodb server is running on our computer

// /test - this is what we are calling our database

mongoose.connect(connectionString);

mongoose.connection.on('connected', () => {
	console.log(`Mongoose connected to ${connectionString}`);
})

mongoose.connection.on('disconnected', () => {
	console.log(`Mongoose disconnected`);
})

mongoose.connection.on('error', (err) => {
	console.log(err, 'mongoose error');
})