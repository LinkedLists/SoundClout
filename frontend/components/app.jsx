import React from "react";
import { Route } from 'react-router-dom'
import SignupFormContainer from './session_form/signup_container'
import LoginFormContainer from './session_form/login_container'
import NavBarContainer from './navbar/navbar_container'
import Modal from './modal/modal';

const App = () => (
  <div>
    <h1>This is the app</h1>
    <Modal />
    <Route path='/' component={NavBarContainer} />
    {/* <Route path='/signup' component={SignupFormContainer} />
    <Route path='/login' component={LoginFormContainer} /> */}
  </div>
);

export default App;