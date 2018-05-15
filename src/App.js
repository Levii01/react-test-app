import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Andrzej eat glass. Why?</h1>
        <p>Hi, it working!</p>
        <Person />
      </div>
    );
  }
}

export default App;
