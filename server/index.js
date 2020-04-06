const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const mongoose = require('mongoose');
var PORT = process.env.PORT || 1258;
const app = express();

app.use(cors());
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + '/../client/dist')));


app.get('/api/blogs', (req, res) => {
  db.get(req, res);
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.post('/api/blogs', (req, res) => {
  db.saveBlog(req.body);
});

app.delete('/api/blogs', (req, res) => {
  db.deleteBlog(req.query, res);
});

app.listen(PORT, () => console.log(`Server connected to port: ${PORT}`));
