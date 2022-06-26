import React from 'react';
import '@styles/SecundaryButton.scss';

const SecundaryButton = ({children}) => {
  return (
    <button className="secondary-button signup-button">{children}</button>
  )
}

export default SecundaryButton;