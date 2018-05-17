import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Andzrej", age: 20},
      { name: "Miłosz", age: 20},
      { name: "Natalia", age: 19},
    ]
  }

  switchNameHandler = () => {
    this.setState(
        {
          persons: [
            { name: "Paweł", age: 20},
            { name: "Miłosz", age: 20},
            { name: "Natalia", age: 20},
          ]
        }
    )
  }

  render() {
    return (
      <div className="App">
        <h1>Andrzej eat glass. Why?</h1>
        <p>Hi, it working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}> I love swimming! </Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
 