import React, { Component } from 'react';
import logo from './logo.svg';
import headshot from './headshot.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p className="Text-description" >Welcome!<br></br><br></br>

            Notice: This site is currently under renovation<br></br>
            Much of the content is still being imported.<br></br>
            Check back again soon for updates.<br></br>
          </p>
          <img src={headshot} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
