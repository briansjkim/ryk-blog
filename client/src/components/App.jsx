import React from 'react';
import All from './All.jsx';
import Home from './Home.jsx';
import FullBlog from './FullBlog.jsx';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/all" component={All} />
        <Route path="/blog" component={FullBlog} />
      </Switch>
    </div>
  )
}

export default App;
