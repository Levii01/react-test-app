import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Andzrej", age: 20 },
      { name: "Miłosz", age: 20 },
      { name: "Natalia", age: 19 }
    ],
    showPersons: false
  };

  switchNameHandler = (newName) => {
    this.setState(
        {
          persons: [
            { name: newName, age: 20},
            { name: "Miłosz", age: 20},
            { name: "Natalia", age: 20},
          ]
        }
    )
  }
  nameChangeHandler = (event) => {
    this.setState(
        {
          persons: [
            { name: "Andrzej", age: 20},
            { name: event.target.value, age: 20},
            { name: "Natalia", age: 20},
          ]
        }
    )
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit', 
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person
              name={person.name}
              age={person.age}> I love swimming! </Person>
          })}
        </div> 
      );
    };

    return (
      <div className="App">
        <h1>Andrzej eat glass. Why?</h1>
        <p>Hi, it working!</p>
        <button 
          style={style}
          onClick={this.switchNameHandler.bind(this, 'Andrzejek!')}>Switch Name</button>
        <button onClick={() => this.switchNameHandler('Andrzejekejekejek!')}>Switch Name</button>
        <button onClick={this.togglePersonsHandler}> Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
 