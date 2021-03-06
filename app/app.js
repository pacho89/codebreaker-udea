// importar
var cors = require('cors')
var express = require('express'),
CodeBreaker = require('./code-breaker');
// instanciar
var app = express();
app.use(cors())
// ruteo
app.get('/setsecret/:secret', function(req, res){
  number = req.params.secret;
  CodeBreaker.setSecret(number);
  res.send({message: 'ok, let the game begin'});
});

app.get('/guess/:number', function(req, res){
  number = req.params.number;
  res.send({result: CodeBreaker.guess(number)});
});

app.get('/upgrade/', function(req, res){
  res.send({message: 'KO'});
});

app.get('/otro/', function(req, res){
  res.send({message: 'OK'});
});

module.exports= app;
 