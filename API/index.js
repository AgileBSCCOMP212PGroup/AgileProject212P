
// GJ212P-8
const dotenv = require('dotenv');
const morgan = require('morgan');

const path = require('path');
const cors = require('cors');

const connectDB = require('./server/database/connection');
const express = require('express');
const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
// parse application/json
const app = express(); // Change the variable name to "app" instead of "app1" and "app2" to avoid confusion
app.disable("x-powered-by");

// helmet security configuration and cookie
const helmet = require("helmet"); 
const cookieParser = require('cookie-parser');
app.use(helmet.hidePoweredBy());

dotenv.config({ path: 'config.env' });
const PORT = process.env.PORT || 4000;

// log request
app.use(morgan('tiny'));

//mongodb connection
connectDB();

// parse request to body parser and other middleware
 // parse application/x-www-form-urlencoded
 // parse application/json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));


app.use(cors());
app.use(cookieParser()); 



// load routers
app.use('/', require('./server/routes/router'));

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT); // Add the PORT number to the console log
});
