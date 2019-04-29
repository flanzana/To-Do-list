import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from "../actions";
// import PropTypes from 'prop-types';

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input ref={node => input = node} />
      <button
        onClick={() => {
          dispatch(addTodo(input.value));
          // after button is clicked (action dispatched), the field is cleared
          input.value = '';
        }}
      >
        Add To Do
      </button>
    </div>
  );
};
// // context is unstable API so better to avoid it in your code
// AddTodo.contextTypes = {
//   store: PropTypes.object
// };

// as state is null and dispatch will always render dispatch, we do not need to write anything in connect
// export default connect(
//   state => {return {}},
//   dispatch => { return { dispatch }}
// )(AddTodo)
export default connect()(AddTodo)