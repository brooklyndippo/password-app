import { useState } from 'react'
import { connect, useSelector } from 'react-redux'
import randomColor from "randomcolor";


function PasswordList() {
  const passwords = useSelector((state) => state.passwords)

  const passwordList = passwords.map((pass, index) => {
    return (
      <div key={index} style={{ border: '1px solid black', borderRadius: '10px', width: '400px', marginBottom: '10px'}}>
        <h4><strong>{pass.name}</strong></h4>
        <h5>{pass.password}</h5>
      </div>)
  })
  
  return (
    <div>
      {passwordList}
    </div>
  )
}

export default PasswordList