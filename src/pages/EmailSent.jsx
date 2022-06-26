import React from 'react';
import PrimaryButton from '@components/PrimaryButton';
import '@styles/EmailSent.scss';
import iconEmail from "@icons/email.svg";
import logoYardSale from "@logos/logo_yard_sale.svg";

const EmailSent = () => {
    return (
        <div className='EmailSent'>
            <div className='EmailSent-container'>
                <img src={logoYardSale} alt='logo' className='logo'/>
            
                <h1 className='title'>Email has been sent!</h1>
                <p className='subtitle'>Please check your inbox for instructions on how to reset the password</p>
            
                <div className='email-image'>
                    <img src={iconEmail} alt='email'/>
                </div>
            
                <PrimaryButton>Login</PrimaryButton>
            
                <p className='resend'>
                    <span>Didn't receive the email?</span>
                    <a href='/'> Resend</a>
                </p>
            </div>
        </div>
    )
}

export default EmailSent;