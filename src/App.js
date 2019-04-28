import React from 'react';
import './App.css';
import VisibleTodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import Filters from "./components/Filters";

const App = () => (
  <div className="App">
    <AddTodo />
    <VisibleTodoList />
    <Filters />
  </div>
);

export default App;
