const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const photosPath = __dirname + '/data/photos.json';
const encoding = 'utf-8';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/api/photos', (req, res) => {
    const fs = require('fs');
    const data = fs.readFileSync(photosPath);
    res.send(data);
});
app.get('/api/photos/:index', (req, res) => {
  const fs = require('fs');
  const data = fs.readFileSync(photosPath, encoding);
  const index = parseInt(req.params.id);
  const page = parseInt(req.params.page) || 10;
  const json = JSON.parse(data);
  res.json({
    data: json.splice(index * page, page)
  });
});
if (process.env.NODE_ENV === 'development') {
  module.exports = app;
} else {
  module.exports = app.listen(3000);
}
