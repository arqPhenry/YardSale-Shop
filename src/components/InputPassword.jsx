import React from 'react';
import '@styles/Input.scss';

const InputPassword = ({children}) => {
  return (
    <>
      <label htmlFor="new-password" className="label">{children}</label>
      <input type="password" name="password" placeholder="*********" className="input input-password"/>
    </>

  )
}

export default InputPassword;