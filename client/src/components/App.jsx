import React from 'react';
import Header from './Header.jsx';
import Nav from './Nav.jsx';
import Mid from './Mid.jsx';
import Blogs from './Blogs.jsx';
import Copyright from './Copyright.jsx';
import styles from './css/index.css';

class App extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className={styles.main}>
        <Nav />
        <Header />
        <Mid />
        <Blogs />
        <div>
          <a href="#nav"><button className={styles.back}>Back to top</button></a>
        </div>
        <Copyright />
      </div>
    )
  }
};

export default App;
