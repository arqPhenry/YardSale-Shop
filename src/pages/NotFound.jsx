import React from 'react';
import PrimaryButton from '@components/PrimaryButton';
import '@styles/NotFound.scss';
import logoYardSale from "@logos/logo_yard_sale.svg";
import iconEmail from "@icons/404-error.png";

const NotFound = () => {
  return (
    <div className='NotFound'>
            <div className='NotFound-container'>
              <img src={logoYardSale} alt='logo' className='logo'/>
          
              <h1 className='title'>Error 404, Not Found</h1>
              <p className='subtitle'>It looks like we have to reprimand someone in our team.</p>
          
              <div className='email-image'>
                  <img src={iconEmail} alt='email'/>
              </div>

              <a href='/'>
                <PrimaryButton className="login-button">Back to home</PrimaryButton>
              </a>
              
          
              <p className='resend'>
                  <span>Do you have any recommendations?</span>
                  <br />
                  <a href='/'>Contact us</a>
              </p>
            </div>
      </div>
  )
}

export default NotFound;