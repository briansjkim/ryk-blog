const model = require('./index.js');
const data = require('./data.js');

const seed = () => {
  for (var blog of data.blogs) {
    let title = blog.title;
    let date = blog.date;
    let message = blog.message;

    model.saveBlog(title, date, message);
  }
}

seed();
