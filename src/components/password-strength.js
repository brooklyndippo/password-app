import React, { useState } from 'react'
import zxcvbn from 'zxcvbn';

function PasswordStrength(props) {

  const {password} = props

  let strength = (zxcvbn(password))

  return (
    <div>
      <p>password strength: {strength.score}</p>
    </div>
  )
}

export default PasswordStrength;