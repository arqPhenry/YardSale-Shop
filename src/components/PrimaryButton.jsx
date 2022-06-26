import React from 'react';
import '@styles/PrimaryButton.scss';


const PrimaryButton = ({children, handleSubmit}) => {
  return (
    <button type="button" onClick={handleSubmit} className="primary-button login-button">{children}</button>
  )
}

export default PrimaryButton;