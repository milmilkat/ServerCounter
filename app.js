var express = require('express');
var app = express();

const counter1 = 50;
const counter2 = 5;


app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/counter1', function (req, res) {
    res.send(counter1.toString());
});

app.get('/counter2', function (req, res) {
    res.send(counter2.toString());
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});