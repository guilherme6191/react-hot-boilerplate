import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

// disabled eslint rule just to keep the main comp a class
// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <main className="jumbotron text-center">
        <div className="container">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <h4>This is your hot react boilerplate</h4>
          <p>For more info go to
            <br />
            <a href="https://github.com/guilherme6191/react-hot-boilerplate/tree/with-redux-b4">
              react-hot-boilerplate
            </a>
            <br />
            or
            <br />
            <a href="https://github.com/facebookincubator/create-react-app"> create-react-app. </a>
          </p>
        </div>
        <div className="col-12 mt-4">
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <p className="App-intro">
            Using <a href="https://v4-alpha.getbootstrap.com/">
              Bootstrap v4
            </a>
          </p>
        </div>
      </main>
    );
  }
}

export default App;
