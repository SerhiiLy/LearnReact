import { useState } from 'react';
import { styled } from 'styled-components'
import Button from './Button.jsx'
const ControlContainer =  styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`
export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      {/*<div className="controls">*/}
      <ControlContainer>
        <p>
          <label className={`label ${emailNotValid ? 'invalid' : ''}`} >EmaiL</label>
          <input
            type="email"
            // style ={{
            //   backgroundColor: emailNotValid ? '#fed2d2' : '#d1d5db'
            // }}
            className={emailNotValid ? 'invalid' : undefined}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>
        <p>
          <label className={`label ${emailNotValid ? 'invalid' : ''}`}>Password</label>
          <input
            type="password"
            className={passwordNotValid ? 'invalid' : undefined}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p>
      </ControlContainer>
      {/*</div>*/}
      <div className="actions">
        <Button type="button" className="text-button">
          Create a new account
        </Button>
        <button className='button' onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  );
}
