import React from 'react'
import InputEmail from '@components/InputEmail';
import InputPassword from '@components/InputPassword';
import InputText from '@components/InputText';
import PrimaryButton from '@components/PrimaryButton';
import '@styles/CreateAccount.scss';

const CreateAccount = () => {
  return (
    <div className="CreateAccount">
    <div className="CreateAccount-container">
      <h1 className="title">My account</h1>

      <form action="/" className="form">
        <div>
          <InputText>Name</InputText>
          <InputEmail>Email address</InputEmail>
          <InputPassword>Password</InputPassword>
        </div>

        <PrimaryButton>Create account</PrimaryButton>
      </form>
    </div>
  </div>
  )
}

export default CreateAccount;