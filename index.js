const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// in latest body-parser use like below.
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", function (request, response) {
    console.log(request);
    response.redirect('/');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.use('/assets', express.static(__dirname + '/assets'));

app.listen(3000, () => {
    console.log('Server is up on 3000');
})