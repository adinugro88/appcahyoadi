import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    name:'data'
  }
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Coming Soon React Program with PostgreSQL
          </p>
        
          <a
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
          >
           Welcome To the Jungle 
          </a>
        </header>
      </div>
    );
  }
}

export default App;
