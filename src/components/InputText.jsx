import React from 'react';
import '@styles/Input.scss';

const InputText = ({children}) => {
  return (
    <>
        <label htmlFor="name" class="label">{children}</label>
        <input type="text" id="name" placeholder="Jhon Doe" class="input input-name"/>
    </>
  )
}

export default InputText;