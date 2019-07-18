let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.json());

let universityService = require('./services/university.service.server');
universityService(app);

app.listen(3000);
