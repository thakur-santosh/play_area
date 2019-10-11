import React from 'react';
import logo from './logo.svg';
import './App.css';
import Count from './component/countComponent'
import Todo from './component/todoComponent'
import User from './component/userComponent'
import UserShow from './component/userShow'
import {BrowserRouter,Link,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div>
      <h1>Redux user</h1>
      
      <ul>
        <li><Link to = "/count">Count</Link></li>
        <li><Link to = "/todo">Todo</Link></li>
        <li><Link to = "/users">Users</Link></li>
      </ul>
      <Route path = "/count" component = {Count}></Route>
      <Route path = "/todo" component = {Todo}></Route>
      <Route path = "/users" component={User} exact = {true}></Route>
      <Route path = "/users/:id" component ={UserShow}></Route>
      {/* <Count />
      <hr />
      <Todo /> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
