import React from 'react';
import '../styles/CreateNewPassword.scss';
import PrimaryButton from '../components/PrimaryButton';
import InputPassword from '../components/InputPassword';
import logoYardSale from "@logos/logo_yard_sale.svg";


const CreateNewPassword = () => {
    return (
    <div className='CreateNewPassword'>
        <div className='CreateNewPassword-container'>
          <img src={logoYardSale} alt='logo' className='logo'/>
    
          <h1 className='title'>Create a new password</h1>
          <p className='subtitle'>Enter a new password for your account</p>
    
          <form action='/' className='form'>
            <InputPassword>New password</InputPassword>
            <InputPassword>Confirm password</InputPassword>
    
            <PrimaryButton>Confirm</PrimaryButton>
          </form>
        </div>
    </div>
    )
}

export default CreateNewPassword;