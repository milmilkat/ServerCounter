var express = require('express');
var app = express();

let counter1 = 50;
let counter2 = 5;


app.get('/', function (req, res) {
    res.send(`Counter1: ${counter1} \r\n Counter2: ${counter2}`);
});

app.get('/counter1', function (req, res) {
    counter1--;
    res.send(counter1.toString());
});

app.get('/counter2', function (req, res) {
    counter2--;
    res.send(counter2.toString());
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});