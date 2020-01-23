const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./database/index.js');
var PORT = process.env.PORT || 1258;
const app = express();

app.use(cors());
app.use(bodyParser.text());
app.use(express.static(path.join(__dirname + '/../client/dist')));


app.get('/api/blog', (req, res) => {

});

app.get('/api/allBlogs', (req, res) => {

});

app.post('/api/blog', (req, res) => {

});

app.put('/api/blog', (req, res) => {

});

app.delete('/api/blog', (req, res) => {

});

app.listen(PORT, () => console.log(`Server connected to port: ${PORT}`));
