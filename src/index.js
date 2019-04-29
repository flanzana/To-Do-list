import React from 'react';
// import PropTypes from "prop-types";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import { todoApp } from "./reducers";
import * as serviceWorker from './serviceWorker';

// // Provider can be passed with react-redux
// class Provider extends Component {
//   // it will pass store props to all child components
//   getChildContext() {
//     return {
//       store: this.props.store
//     };
//   }
//
//   render() {
//     return this.props.children;
//   }
// }
//
// Provider.childContextTypes = {
//   store: PropTypes.object
// };


ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <App />
  </Provider>,
  document.getElementById('root'));
serviceWorker.unregister();
