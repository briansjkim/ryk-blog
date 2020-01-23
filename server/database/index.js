const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blogs', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => console.log('Successful connection'));

const Schema = mongoose.Schema;
var blogSchema = new Schema({
  id: Number,
  title: String,
  date: String,
  message: String
});

var Blog = mongoose.model('Blog', blogSchema);

module.exports = {
  getAll: function (callback) {
    Blog.find((err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    })
  }
};

