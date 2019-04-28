import {combineReducers} from "redux";

export const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};

export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

export const visibilityFilter = (
  state = 'SHOW_ALL',
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

// todoApp without using combineReducers
// export const todoApp = (state = {}, action) => {
// 	return {
// 		todos: todos(
// 			state.todos,
// 			action
// 		),
// 		visibilityFilter: visibilityFilter(
// 			state.visibilityFilter,
// 			action
// 		)
// 	};
// };

// todoApp with using combineReducers
export const todoApp = combineReducers({
  todos, // same as todos: todos,
  visibilityFilter // same as visibilityFilter: visibilityFilter
});

// Implementing combineReducers() from Scratch
// const combineReducers = (reducers) => {
// 	return (state = {}, action) => {
// 		return Object.keys(reducers).reduce(
// 			(nextState, key) => {
// 				nextState[key] = reducers[key](
// 					state[key],
// 					action
// 				);
// 				return nextState;
// 			},
// 			{}
// 		);
// 	};
// };
