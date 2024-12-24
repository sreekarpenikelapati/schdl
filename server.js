const express = require('express');
const path = require('path');
const app = express();
const port = `80`;

app.use(express.static(path.join(__dirname + '/public')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/premium', function(req, res) {
  res.sendFile(path.join(__dirname, 'premium.html'));
});

app.get('/index.html', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/premium.html', function(req, res) {
  res.sendFile(path.join(__dirname, 'premium.html'));
});

app.listen(port, () => {
  console.log('Server started at http://localhost:' + port);
});
