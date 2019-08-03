module.exports = function () {
    const mongoose = require('mongoose');
    const databaseName = 'whiteboard';
    let   connectionString =
        'mongodb://localhost:27017/';
    connectionString += databaseName;

    if(process.env.MLAB_USERNAME_WEBDEV) {
        var username = process.env.MLAB_USERNAME_WEBDEV;
        var password = process.env.MLAB_PASSWORD_WEBDEV;
        connectionString = 'mongodb://' + username + ':' + password;
        connectionString += '@ds113122.mlab.com:13122/heroku_lfscl362';
    }

    let options = {
        server : {
            socketOptions : {
                keepAlive : 300000,
                connectTimeoutMS : 30000
            }
        },
        replset : {
            socketOptions : {
                keepAlive : 300000,
                connectTimeoutMS : 30000
            }
        },
        db: {
            useNewUrlParser: true
        }
    };

    mongoose.connect(connectionString,options);

    let db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));
};
