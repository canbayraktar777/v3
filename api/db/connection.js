/*
    Event Emitter Class required to dispatch event(s);

*/

const EventEmitter = require('events');

/*
    Mongoose used for MondoDB connection.
*/
const mongoose = require('mongoose');

/*
    DBConnection Class
*/

class DBConnection extends EventEmitter {
    constructor(opts){
        // Call EventEmitter constructor first
        super();

        // *Fix: DeprecationWarning of promises
        mongoose.Promise = global.Promise;

        // Connect to database
        mongoose.connect(opts.uri);

        // Make connection available for other modules
        this.connection = mongoose.connection;
    }
};

// this is the exported object from this module
const db = new DBConnection({ uri : 'mongodb://127.0.0.1:27017/v3'});

/*
    Log connection error
*/
db.connection.on('error', console.error.bind(console, 'connection error:'));

/*
    Event: ready

    Dispatches when the connection established successfully
*/
db.connection.once('open', function() {
    db.emit('ready');
});

module.exports = db;
