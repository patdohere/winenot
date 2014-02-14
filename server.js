var express = require('express'),
    path = require('path'),
    http = require('http'),
    io = require('socket.io'),
    wine = require('./routes/wines');

var app = express();

app.configure(function () {
    app.set('port', process.env.PORT || 8080);
    app.use(express.logger('dev'));
    app.use(express.bodyParser())
    app.use(express.static(path.join(__dirname, 'public')));
});

var server = http.createServer(app);

server.listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});

app.get('/wines', wine.findAll);
app.get('/wines/:id', wine.findById);
app.post('/wines', wine.add);
app.put('/wines/:id', wine.update);
app.delete('/wines/:id', wine.delete);