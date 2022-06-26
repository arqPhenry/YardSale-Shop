import React, {useRef} from 'react';
import InputEmail from '@components/InputEmail';
import InputPassword from '@components/InputPassword';
import PrimaryButton from '@components/PrimaryButton';
import SecundaryButton from '@components/SecundaryButton';
import '@styles/Login.scss';
import logoYardSale from "@logos/logo_yard_sale.svg";

const Login = () => {
  const form = useRef(null);

	const handleSubmit = () => {
		
		const formData = new FormData(form.current);
		const data = {
			usename: formData.get('email'),
			password: formData.get('password')
		}
		console.log(data);
	}

  return (
    <div className='Login'>
        <div className='Login-container'>
            <img src={logoYardSale} alt='logo' className='logo'/>

            <form action='/' className='form' ref={form} >
                <InputEmail name="email">Email address</InputEmail>
                <InputPassword name="password">Password</InputPassword>

                <PrimaryButton handleSubmit={handleSubmit}>Log in</PrimaryButton>
                <a href='/password-recovery'>Forgot my password</a>
            </form>

            <SecundaryButton>Sign up</SecundaryButton>
        </div>
    </div>
  )
}

export default Login;