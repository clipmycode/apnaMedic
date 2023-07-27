const path = require('path');
const express = require('express');
const app = express();
const doc = require('./routes/doc');
const patient = require('./routes/patient');

const staticFolder = path.resolve(__dirname, 'static');
express.static.mime.types['js'] = 'text/javascript';
app.use(express.static(staticFolder));

const homePage = path.resolve(__dirname, 'static/index.html');

app.use('/', doc);
app.use('/', patient);

app.get('/', (req, res) => {
    res.sendFile(homePage);
});

const port = process.env.PORT || 5000;
app.listen(port, ()=> {
    console.log(`Listening on port ${port}...`)
});