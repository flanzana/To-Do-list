import React from "react";

// presentational component
const TodoItem = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration:
        completed ?
          'line-through' :
          'none'
    }}
  >
    {text}
  </li>
);

export default TodoItem