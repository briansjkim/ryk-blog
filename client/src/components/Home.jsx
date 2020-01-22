import React from 'react';
import Header from './Header.jsx';
import Nav from './Nav.jsx';
import Mid from './Mid.jsx';
import Blogs from './Blogs.jsx';
import Copyright from './Copyright.jsx';
import { Switch, Route } from 'react-router-dom';
import styles from './css/index.css';

const Home = () => {
  return (
    <div id="main" className={styles.main}>
      <Nav />
      <Header />
      <Mid />
      <Blogs />
      <div>
        <a href="#main"><button className={styles.back}>Back to top</button></a>
      </div>
      <Copyright />
    </div>
  )
}

export default Home;
