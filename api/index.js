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
  const index = parseInt(req.params.index);
  const page = parseInt(req.params.page) || 10;
  const json = JSON.parse(data);
  // 1. json의 길이가 index * page보다 큰지 체크
  // 2. index * page + page보다 큰경우 그대로 실행
  // 3. index * page + page보다 작은경우 index * page만 실행
  var json_data = json;
  if (json.length > (index * page) + page) {
    json_data = json.splice(index * page, page);
  } else if (json.length > index * page && json.length < (index * page) + page) { // 마지막 데이터
    json_data = json.splice(index * page);
  } else {
    json_data = [];
  }
  res.json({
    data: json_data
  });
});
if (process.env.NODE_ENV === 'development') {
  module.exports = app;
} else {
  module.exports = app.listen(3000);
}
