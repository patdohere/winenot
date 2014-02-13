var express = require('express'),
    path = require('path'),
    http = require('http');

var app = express();

app.configure(function () {
  app.set('port', process.env.PORT || 8080);
  app.use(express.logger('dev'));  /* 'default', 'short', 'tiny', 'dev' */
  app.use(express.bodyParser()),
  app.use(express.static(path.join(__dirname, 'public')));
});

var wines = require('./routes/wines');

app.get('/wines', wines.findAll);
app.post('/wines', wines.addWine);
app.get('/wines/:id', wines.findById);
app.put('/wines/:id', wines.updateWine);
app.delete('/wines/:id', wines.deleteWine);

var server = http.createServer(app).listen(app.get('port'), function () {
  console.log("Server listening on port " + app.get('port'));
});

