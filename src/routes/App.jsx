import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import '@styles/global.css';
import Layout from '@containers/Layout.jsx';
import Home from '@pages/Home.jsx';
import Login from '@pages/Login.jsx';
import CreateAccount from '@pages/CreateAccount.jsx';
import PasswordRecovery from '@pages/PasswordRecovery.jsx';
import EmailSent from '@pages/EmailSent.jsx';
import CreateNewPassword from '@pages/CreateNewPassword.jsx';
import Checkout from '@pages/Checkout.jsx';
import MyAccount from '@pages/MyAccount.jsx';
import Orders from '@pages/Orders.jsx';
import NotFound from '@pages/NotFound.jsx';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';


const App = () => {
    const initialState = useInitialState();

    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path='/' element={<Home/>}/>
                        <Route exact path='/login' element={<Login/>}/>
                        <Route exact path='/register' element={<CreateAccount/>}/>
                        <Route exact path='/password-recovery' element={<PasswordRecovery/>}/>
                        <Route exact path='/email-sent' element={<EmailSent/>}/>
                        <Route exact path='/create-new-password' element={<CreateNewPassword/>}/>
                        <Route exact path='/checkout' element={<Checkout/>}/>
                        <Route exact path='/my-account' element={<MyAccount/>}/>
                        <Route exact path='/orders' element={<Orders/>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                </Layout>    
            </BrowserRouter>
        </AppContext.Provider>
        
    );
}

export default App;