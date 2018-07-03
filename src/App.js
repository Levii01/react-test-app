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

    return (
      <div className="App">
        <h1>Andrzej eat glass. Why?</h1>
        <p>Hi, it working!</p>
        <button 
          style={style}
          onClick={this.switchNameHandler.bind(this, 'Andrzejek!')}>Switch Name</button>
        <button onClick={() => this.switchNameHandler('Andrzejekejekejek!')}>Switch Name</button>
        <button onClick={this.togglePersonsHandler}> Toggle Persons</button>
        { this.state.showPersons ===true ?
          <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}> I love swimming! </Person>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler}
            changed={this.nameChangeHandler}/>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}/>
        </div> : null
        }
      </div>
    );
  }
}

export default App;
 