var express = require('express');
var app = express();
const port = 4869;

app.use(express.static('static'));

app.get('/', function(req, res) {
    res.send('Server is running...');
});

var server = app.listen(port, function() {
    console.log(`Server is listening on port ${port}`);
});