const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// Configuring the database
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
let dev_db_url = `mongodb+srv://temp:temp@cluster0.yu9nz.mongodb.net/tmu_corona?retryWrites=true&w=majority`
mongoose.connect(dev_db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route

app.use('/user', require('./routes/user.routes'))

let port = process.env.PORT || 3000
// listen for requests
app.listen(port ,() => {
    console.log(`Server is listening on port ${port}`);
});
