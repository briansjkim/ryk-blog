const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/blogs', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect('mongodb+srv://briaansjkim:Thebsjk58>@cluster0-awjq2.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useCreateIndex: true
});
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

  saveBlog: function (blog) {
    var newBlog = new Blog({
      title: blog.title,
      date: blog.date,
      message: blog.message
    });

    newBlog.save((err, result) => {
      if (err) {
        throw err;
      }
    })
  },

  deleteBlog: function (req, res) {
    Blog.deleteOne({ title: req.title }, (err, result) => {
      if (err) {
        throw err;
      }
    })
  }
};

