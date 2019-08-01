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
        connectionString += '@ds255857.mlab.com:55857/heroku_r2x0c625';
    }

    mongoose.connect(connectionString,{ useNewUrlParser: true });
};
