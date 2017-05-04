var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const port = 4869;

var Flashes = [
    { flashName: 'The Flash', realName: 'Barry Allen', avata: 'https://cdn.bleedingcool.net/wp-content/uploads/2013/09/Screen-Shot-2013-09-09-at-23.01.34.png' },
    { flashName: 'Reverse Flash', realName: 'Eobard Thawne', avata: 'http://i328.photobucket.com/albums/l325/thebestpoll/The%20Flash%20Characters/Eobard%20Thawne_new_zpslr9ulznl.jpg' },
    { flashName: 'Zoom', realName: 'Hunter Zolomon', avata: 'http://vignette4.wikia.nocookie.net/arrow/images/d/dc/Hunter_with_a_smug_smile.png/revision/latest?cb=20160528070943' },
    { flashName: 'Kid Flash', realName: 'Wally West', avata: 'http://static4.businessinsider.com/image/566d9058dd0895da258b4571-3584-2688/keiynan-lonsdale.jpg' },
    { flashName: 'Jesse Quick', realName: 'Jesse Wells', avata: 'https://moviecomicswhoswho.files.wordpress.com/2015/11/jesse-wells.jpg?w=300&h=283' },
    { flashName: 'Flash', realName: 'Jay Garrick', avata: 'http://vignette2.wikia.nocookie.net/smallville/images/5/55/JWS-jay-garrick-TheFlash.jpg/revision/latest?cb=20160525120040' }
];

app.use(express.static('static'));
app.use(bodyParser.json()); // Parse json body
app.use(bodyParser.urlencoded({ extended: true })); // Parse urlencoded body

app.get('/api/flashes', (req, res) => {
    res.status(200).send({ data: Flashes });
});

app.post('/api/flashes', (req, res) => {
    var newFlash = req.body;
    newFlash.id = Flashes.length + 1;
    Flashes.push(newFlash);
    res.json(newFlash);
});

app.delete('/api/flashes', (req, res) => {
    var removedFlash = req.body;
    console.log('Remove Flash: ', removedFlash);
});

var server = app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});