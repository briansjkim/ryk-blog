const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blogs', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => console.log('Successful connection'));

const Schema = mongoose.Schema;
var blogSchema = new Schema({
  title: String,
  date: String,
  message: String
});

var Blog = mongoose.model('Blog', blogSchema);

module.exports = {
  get: function (req, res) {
    Blog.find((err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    }).limit(4);
  },

  getAll: function (req, res) {
    Blog.find((err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    })
  },

  saveBlog: function (blog) {
    var newBlog = new Blog({
      title: blog.title,
      date: blog.date,
      message: blog.message
    });

    newBlog.save((err, result) => {
      if (err) {
        console.log('Error', err);
      } else {
        console.log('Success')
      }
    })
  }
};

