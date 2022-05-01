import './App.css';
import Password from './password';

import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import PasswordList from './password-list';
const store = createStore(reducers)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Password />
        <PasswordList />
      </div>
    </Provider>
  );
}

export default App;