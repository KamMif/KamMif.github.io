const express = require('express');

const app = express();

app.use(express.urlencoded())


app.post('/', (req, res) => {
    console.log(req.body);
    res.end()
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.use('/assets', express.static(__dirname + '/assets'));

app.listen(3000, () => {
    console.log('Server is up on 3000');
})