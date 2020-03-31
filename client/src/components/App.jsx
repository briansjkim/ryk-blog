import React from 'react';
import All from './All.jsx';
import Home from './Home.jsx';
import FullBlog from './FullBlog.jsx';
import CreateBlog from './CreateBlog.jsx';
import EditBlog from './EditBlog.jsx';
import { Switch, Route, withRouter } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/all">
          <All />
        </Route>
        <Route path="/blog">
          <FullBlog />
        </Route>
        <Route path='/create'>
          <CreateBlog />
        </Route>
        <Route path='/edit'>
          <EditBlog />
        </Route>
      </Switch>
    </div>
  )
}

export default withRouter(App);
