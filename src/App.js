import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Jumbotron } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Jumbotron className="text-center">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <h4>This is your hot react boilerplate</h4>
          <p>For more info go to
            <a href="https://github.com/facebookincubator/create-react-app"> create-react-app. </a>
          </p>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </Jumbotron>
    );
  }
}

export default App;
