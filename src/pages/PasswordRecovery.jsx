import React from 'react';
import InputEmail from '@components/InputEmail';
import PrimaryButton from '@components/PrimaryButton';
import '@styles/PasswordRecovery.scss';
import logoYardSale from "@logos/logo_yard_sale.svg";

const PasswordRecovery = () => {
  return (
    <div className='PasswordRecovery'>
        <div className='PasswordRecovery-container'>
          <img src={logoYardSale} alt='logo' className='logo'/>
    
          <h1 className='title'>Password recovery</h1>
          <p className='subtitle'>Inform the email address used to create your account</p>
    
          <form action='/' className='form'>
            <InputEmail>Email address</InputEmail>
    
            <PrimaryButton>Submit</PrimaryButton>
          </form>

          <p className='resend'>
                <a href='/login'>Back to login</a>
          </p>
        </div>
    </div>
  )
}

export default PasswordRecovery;