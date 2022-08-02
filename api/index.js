const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require("fs");
const todoPath = __dirname + '/data/photos.json';
const encoding = 'utf-8';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/api/photos', (req, res) => {
    const fs = require('fs');
    const data = fs.readFileSync(todoPath);
    res.send(data);
});
if (process.env.NODE_ENV === 'development') {
  module.exports = app;
} else {
  module.exports = app.listen(3000);
}
