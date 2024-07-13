import { React, useState } from 'react';
import validator from 'validator';
import './App.css'

const App = () => {
  const [ errorMessage, setErrorMessage ] = useState('');

  const validate = (value) => {

    if(validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setErrorMessage('Password is strong')
    } else {
      setErrorMessage('Password in NOT strong')
    }
  }

  return (
    <div className='content'>
      <pre>
        <h2>Checking Password Strength in ReactJS</h2>
        <span>Enter Password: </span><input type='text' 
          onChange={(e) => validate(e.target.value)}></input> <br />
          <div className='message'>
        {errorMessage}
        </div>
      </pre>
    </div>
  );
}

export default App;
