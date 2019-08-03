module.exports = function () {
    const mongoose = require('mongoose');
    const databaseName = 'whiteboard';
    let   connectionString =
        'mongodb://localhost:27017/';
    connectionString += databaseName;

    if(process.env.MLAB_USERNAME_WEBDEV) {
        let username = process.env.MLAB_USERNAME_WEBDEV;
        let password = process.env.MLAB_PASSWORD_WEBDEV;
        connectionString = 'mongodb://' + username + ':' + password;
        connectionString += '@ds113122.mlab.com:13122/heroku_lfscl362';
    }

    mongoose.connect(connectionString,{useNewUrlParser: true});
};
