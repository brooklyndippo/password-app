import './App.css';
import Password from './components/password';
import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import PasswordList from './components/password-list';
import PasswordStrength from './components/password-strength';

const store = createStore(reducers)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Password />
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
        <PasswordList />
        </div>
      </div>
    </Provider>
  );
}

export default App;