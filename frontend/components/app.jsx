import React from "react";
import SignupFormContainer from './session_form/signup_container'
import { Route } from 'react-router-dom'

const App = () => (
  <div>
    <h1>This is the app</h1>
    <Route path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;