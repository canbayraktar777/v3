var express = require("express");
var bodyParser = require("body-parser");
var routes = require('./routes');
var db = require('./db');
var cors = require('cors');

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/',routes);
app.use(express.static('../dist'));
app.use('/graph', express.static('../dist'));
// Server starts listening when database is ready
db.on('ready', function() {

    // Initialize the app.
    var server = app.listen(process.env.PORT || 3000, function () {

        var port = server.address().port;
        console.log("App now running on port", port);

    });
});
