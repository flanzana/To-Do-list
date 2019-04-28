import React from 'react';
import './App.css';
import { store } from './store';
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import Filters from "./components/Filters";

const getVisibleTodos = (
  todos,
  filter
) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(
        t => t.completed
      );
    case 'SHOW_ACTIVE':
      return todos.filter(
        t => !t.completed
      );
    default:
      return null // should not happen
  }
};

let nextTodoId = 0;

const App = ({ todos, visibilityFilter }) => (
  <div className="App">
    <AddTodo
      onAddClick={text =>
        store.dispatch({
          type: 'ADD_TODO',
          id: nextTodoId++,
          text
        })
      }
    />
    <TodoList
      todos={getVisibleTodos(todos, visibilityFilter)}
      onTodoClick={id =>
        store.dispatch({
          type: 'TOGGLE_TODO',
          id
        })
      }
    />
    <Filters
      visibilityFilter={visibilityFilter}
      onFilterClick={filter =>
        store.dispatch({
          type: 'SET_VISIBILITY_FILTER',
          filter
        })
      }
    />
  </div>
);

export default App;
