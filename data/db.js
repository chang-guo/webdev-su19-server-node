module.exports = function () {
    const mongoose = require('mongoose');
    let   connectionString =
        'mongodb://qwerty123:qwerty123@ds113122.mlab.com:13122/heroku_lfscl362';

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
