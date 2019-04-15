const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hey, Im Node Js');
});

app.listen(3000, () => {
    console.log('Server is up on 3000');
})