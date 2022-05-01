import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPassword } from '../actions'
var randomWords = require('random-words');


function generatePassword() {
  // generate a password here
  console.log("generating password")
  let newPassword = (randomWords({exactly: 4, join: '-'}))
  console.log(newPassword)
}

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
    setPassword(password);
  }
 
  return (
    <div>
      <div>
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
      </div>
        {/* BUTTON TO SAVE */}
      <div>
        <button onClick={(e) => {
          dispatch(addPassword(name, password))
        }}>Save</button>
      </div>


      <div>{password}</div>
      <div>
        <button onClick={(e) => {
          generatePassword()
        }}>Generate</button>
      </div>
    </div>
  )
}

export default Password