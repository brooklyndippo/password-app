import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPassword } from '../actions'
import PasswordStrength from './password-strength';
import randomColor from "randomcolor";
var randomWords = require('random-words');

function Password() {
  const dispatch = useDispatch()

  //Set states
  const [name, setName] = useState('')
  const [password, setPassword] = useState('p@$$w0rd')

  function generatePassword() {
    // generate a password here
    console.log("generating password")
    let newPassword = randomWords({exactly: 4, join: '-'})
    console.log(newPassword)
    setPassword(newPassword);
  }
 
  return (
    <div style={{height: '40vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{margin: '40px'}}>
        {/* NAME OF PASSWORD */}
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* ACTUAL PASSWORD */}
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        {/* BUTTON TO SAVE */}
        <button onClick={(e) => {
          dispatch(addPassword(name, password))
        }}>Save</button>
      </div>


      <div><strong>{password}</strong></div>
      <div>
        <button
        style={{backgroundColor: randomColor(), borderRadius: '10px', margin: '10px', padding: '10px', width: '200px', fontSize: '1.2em'}}
        onClick={(e) => {
          generatePassword()
        }}>Generate Password</button>
      </div>

      <PasswordStrength password={password} />
    </div>
  )
}

export default Password