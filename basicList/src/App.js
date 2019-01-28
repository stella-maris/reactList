import React, { Component } from 'react';
import './App.css';

//create an array example
const fruits = [
    'Apple',
    'Banana',
    'Orange'
];

//traditional loop through array
let fruitElements = [];
for (let i = 0; i < fruits.length; i++){
  fruitElements.push(<li>{fruits[i]}</li>);
}

//inline method
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Lists example</h1>
        <ol>
            {/*{fruitElements}*/}
        </ol>
        <ul>
            {fruits.map((fruit, index) =>{
              return (
                  <li key={fruit+index}>{fruit}</li>
              )
            })}
        </ul>
      </div>
    );
  }
}

export default App;
