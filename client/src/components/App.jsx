import React from 'react';
import All from './All.jsx';
import Home from './Home.jsx';
import { Switch, Route } from 'react-router-dom';
import styles from './css/index.css';


class App extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/all" component={All} />
        </Switch>
      </div>
    )
  }
};

export default App;
