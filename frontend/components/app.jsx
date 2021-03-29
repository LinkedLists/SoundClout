import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom'
import NavBarContainer from './navbar/navbar_container'
import Modal from './modal/modal';
import NotFound from './404/not_found'
import ContentContainer from './content/content_container'
import TrackShowContainer from './track_show/track_show_container'
import Homepage from './homepage/homepage'
import PlaybarContainer from './playbar/playbar_container'
import UploadShowContainer from './upload_show/upload_show_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import '@fortawesome/fontawesome-free/js/all.js';

// Note that session containers will no longer be necessary due to use of a modal
const App = () => (
  <div>
    {/* <Modal /> */}
    <NavBarContainer />
    {/* Routing bugs: 
    1. rendering NotFound component does not clear entire page. If modal is open
    it will remain open when user routes to a undef. route --resolved -- take away 404 page
    
    2. after showing the NotFound component if user goes back one page it will display 
    an error and will need to refresh the page for components to rerender -- resolved -- remove turbolinks
    */}
    <Switch>
      <ProtectedRoute exact path='/discover' component={ContentContainer} />
      <ProtectedRoute exact path='/tracks/:trackId' component={TrackShowContainer} />
      <ProtectedRoute exact path='/upload' component={UploadShowContainer} />
      {/* Note!!!
      did not create a homepage component so NotFound component is just an empty component from
      404 since a 404 page is not necessary
      */}
      <AuthRoute exact path='/' component={Homepage}/>
      {/* <Route component={NotFound} /> */}
    </Switch>
    <PlaybarContainer />
  </div>
);

export default App;