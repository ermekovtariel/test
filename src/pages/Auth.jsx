import React, { useState } from 'react';

import '../styles/Auth.scss';
import { authActionButton } from '../store/actions/auth';
import { useDispatch } from 'react-redux';

function Auth() {
  const dispatch = useDispatch();
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();

  function logHandler() {
    dispatch(
      authActionButton({
        email: login,
        password: password,
      })
    );
  }
  return (
    <div>
      <div className='main'>
        <div style={{ fontSize: '48px' }}>ETB Bank</div>
        <div className='inputGroup inputGroup1'>
          <label htmlFor='email1'>Email</label>
          <input
            type='text'
            id='email'
            placeholder='email@domain.com'
            className='email'
            onChange={(e) => {
              setLogin(e.target.value);
            }}
          />
          <span className='indicator'></span>
        </div>
        <div className='inputGroup inputGroup2'>
          <label style={{ textAlign: 'left' }} htmlFor='password'>
            Password
          </label>
          <input
            type='password'
            id='password'
            placeholder='Password'
            className='password'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className='inputGroup inputGroup3'>
          <button type='submit' onClick={() => logHandler()}>
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Auth;
