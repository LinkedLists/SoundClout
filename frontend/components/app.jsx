import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom'
import NavBarContainer from './navbar/navbar_container'
import Modal from './modal/modal';
import NotFound from './404/not_found'
import ContentContainer from './content/content_container'

// Note that session containers will no longer be necessary due to use of a modal
const App = () => (
  <div>
    <Modal />
    <NavBarContainer />

    {/* Routing bugs: 
    1. rendering NotFound component does not clear entire page. If modal is open
    it will remain open when user routes to a undef. route
    
    2. after showing the NotFound component if user goes back one page it will display 
    an error and will need to refresh the page for components to rerender -- resolved -- remove turbolinks
    */}
    <Switch>
      {/* <Route exact path='/' component={NavBarContainer} /> */}
      <Route exact path='/discover' component={ContentContainer} />

      {/* remove the redirect once you have more components so that you can render 404 */}
      <Redirect to='/' />
      <Route component={NotFound} />
    </Switch>

    {/* This will be the correct routing format later 
    <header><Route component={NavBarContainer} /></header>
    <Switch>
      add more routes here
      <Route component={NotFound} />
    </Switch> 
    */}

  </div>
);

export default App;