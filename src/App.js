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
        <Person name="Andzrej" age="20"> I love swimming! </Person>
        <Person name="Miłosz" age="20"/>
        <Person name="Natalia" age="19"/>
      </div>
    );
  }
}

export default App;
