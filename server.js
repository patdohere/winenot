var express = require('express'),
  path = require('path'),
  http = require('http'),
  io = require('socket.io'),
  wine = require('./routes/wines');

var app = express();

app.configure(function () {
  app.set('port', process.env.PORT || 5000);
  app.use(express.logger('dev'));
  app.use(express.bodyParser())
  app.use(express.static(path.join(__dirname, 'public')));
});

var server = http.createServer(app);

server.listen(app.get('port'), function () {
  console.log("Express server listening on port " + app.get('port'));
});

app.get('/wines', wine.findAll);
<<<<<<< HEAD
app.get('/wines/:id', wine.findById);
app.post('/wines', wine.add);
app.put('/wines/:id', wine.update);
app.delete('/wines/:id', wine.delete);
=======
app.get('/wines/:id', wine.findById);
>>>>>>> f3414f6e8988cb90791412961c6692bf57f3be88
