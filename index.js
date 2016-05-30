var express = require('express');
var app = express();

app.get('/imgs/balloon.png', function(req, res){
  res.sendfile('imgs/balloon.png');
});

app.get('/lib/phaser.js', function(req, res){
  res.sendfile('lib/phaser.js');
});

app.get('/', function(req, res){
  res.sendfile('index.html');
});

app.listen(3000, function(){
  console.log("Listening");
});
