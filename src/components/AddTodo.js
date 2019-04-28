import React from 'react';

// presentational component
const AddTodo = ({ onAddClick }) => {
  let input;

  return (
    <div>
      <input ref={node => input = node} />
      <button
        onClick={() => {
          onAddClick(input.value);
          // after button is clicked (action dispatched), the field is cleared
          input.value = '';
        }}
      >
        Add To Do
      </button>
    </div>
  );
};

export default AddTodo