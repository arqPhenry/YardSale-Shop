import React from 'react';
import '@styles/Input.scss';

const InputEmail = ({children}) => {
  return (
    <>
        <label htmlFor="email" className="label">{children}</label>
        <input type="email" name="email" placeholder="platzi@example.com" className="input input-email"/>
    </>
    
  )
}

export default InputEmail;