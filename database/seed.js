const model = require('./index.js');
const data = require('./data.js');

const seed = () => {
  for (var blog of data.blogs) {
    model.saveBlog(blog);
  }
}

seed();
