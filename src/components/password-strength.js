import React, { useState } from 'react'
import zxcvbn from 'zxcvbn';

function PasswordStrength() {

  let strength = (zxcvbn('p@$5word'))

  return (
    <div>
      <p>password strength: {strength.score}</p>
    </div>
  )
}

export default PasswordStrength;