import React from "react";
import { Route, Switch } from 'react-router-dom'
// import SignupFormContainer from './session_form/signup_container'
// import LoginFormContainer from './session_form/login_container'
import NavBarContainer from './navbar/navbar_container'
import Modal from './modal/modal';
import NotFound from './404/not_found'

// Note that session containers will no longer be necessary due to use of a modal
const App = () => (
  <div>
    <Modal />
    <Switch>
      <Route exact path='/' component={NavBarContainer} />
      <Route component={NotFound} />
    </Switch>

    {/* <Route path='/signup' component={SignupFormContainer} />
    <Route path='/login' component={LoginFormContainer} /> */}
  </div>
);

export default App;