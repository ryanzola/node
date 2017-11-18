var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname))
app.use(bodyParser.json());

var messages = [
    {name: "Kailin", message: "Hej Ryab"},
    {name: "Ryab", message: "Hej Kailinb"}
];

app.get('/messages', (req, res) => {
    res.send(messages);
})

app.post('/messages', (req, res) => {
    messages.push(req.body);
    res.sendStatus(200);
})
var server = app.listen(3000, () => {
    console.log('server is listening on port', server.address().port)
});