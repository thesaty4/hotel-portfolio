const express = require("express");
const app = express();

const cors = require('cors');

//database connection
const databaseConnection = require('./database');

//All Routing Goes here...
var fetchRouter = require('./routes/fetch-route');

// Interceptor 
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
});

//Routing...
app.use('/', fetchRouter);

// Connections....
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
