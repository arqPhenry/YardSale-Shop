import React from 'react';
import logoYardSale from "@logos/logo_yard_sale.svg";
import PrimaryButton from '@components/PrimaryButton';
import iconEmpty from "@icons/wallet.png";
import '@styles/RecentOrders.scss';

const RecentOrders = () => {
  return (
    <div className='RecentOrders'>
        <div className='RecentOrders-container'>
                <img src={logoYardSale} alt='logo' className='logo'/>
            
                <h1 className='title'>You haven't yet completed any order</h1>
                <p className='subtitle'>A summary of all your purchases will be displayed here</p>
            
                <div className='empty-image'>
                    <img src={iconEmpty} alt='empty'/>
                </div>

                <a href='/'>
                    <PrimaryButton>Back to Home</PrimaryButton>
                </a>
                
            
                <p className='resend'>
                    <span></span>
                    <a href='/'>View discounted products</a>
                </p>
            </div>

    </div>
  )
}

export default RecentOrders;