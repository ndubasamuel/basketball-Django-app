const express = require('express');
const path = require('path');

const my_app = express();

my_app.use(express.static(__dirname + '/dist'));
my_app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

my_app.listen(process.env.PORT || 4200);