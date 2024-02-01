const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/Placement-Cell');
mongoose.connect('mongodb://localhost:27017/admin');


const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;
