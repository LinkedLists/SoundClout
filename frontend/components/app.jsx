import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom'
import NavBarContainer from './navbar/navbar_container'
import Modal from './modal/modal';
import NotFound from './404/not_found'
import ContentContainer from './content/content_container'
import TrackShowContainer from './track_show/track_show_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';

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
      <ProtectedRoute exact path='/discover' component={ContentContainer} />
      <ProtectedRoute exact path='/tracks/:trackId' component={TrackShowContainer} />
  
      {/* IMPORTANT!!!
      did not create a homepage component so NotFound component is just an empty component from
      404 since a 404 page is not necessary
      */}
      <AuthRoute to='/' component={NotFound}/>
      {/* <Route component={NotFound} /> */}
    </Switch>
  </div>
);

export default App;