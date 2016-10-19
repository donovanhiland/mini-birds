var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongojs = require('mongojs');

var app = express();



var port = 9000;
app.listen(port, function() {
  console.log('listening on port ' + port);
});
