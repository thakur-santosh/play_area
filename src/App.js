import React from 'react';
import logo from './logo.svg';
import './App.css';
import Count from './component/countComponent'
import Todo from './component/todoComponent'

function App() {
  return (
    <div className="App">
      <h1>Redux user</h1>
      <hr />
      <Count />
      <hr />
      <Todo />
    </div>
  );
}

export default App;
