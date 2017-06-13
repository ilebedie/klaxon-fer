import React from 'react';
import ReactDOM from 'react-dom';
import FileUpload from './FileUpload';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import './App.css'

const App = () => (
  <Router>
    <div>
      <ul className="nav nav-tabs">
        <li role="presentation" className="active"><Link to="/">Home</Link></li>
        <li role="presentation"><Link to="/file_upload">File Upload</Link></li>
        <li role="presentation"><Link to="/about">About</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/file_upload" component={FileUpload}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

ReactDOM.render(
  <App/>
  , document.getElementById('root')
);
