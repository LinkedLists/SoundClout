import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom'
import NavBarContainer from './navbar/navbar_container'
import Modal from './modal/modal';
import NotFound from './404/not_found'
import ContentContainer from './content/content_container'
import TrackShowContainer from './track_show/track_show_container'
import TrackIndexContainer from './track_index/track_index_container'
import UserShowContainer from './user_show/user_show_container'
import Homepage from './homepage/homepage'
import PlaybarContainer from './playbar/playbar_container'
import UploadShowContainer from './upload_show/upload_show_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import '@fortawesome/fontawesome-free/js/all.js';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <ProtectedRoute exact path='/discover' component={ContentContainer} />
      <ProtectedRoute exact path='/library' component={TrackIndexContainer} />
      <ProtectedRoute exact path='/tracks/:trackId' component={TrackShowContainer} />
      <ProtectedRoute exact path='/users/:userId' component={UserShowContainer} />
      <ProtectedRoute exact path='/upload' component={UploadShowContainer} />
      <AuthRoute exact path='/' component={Homepage}/>
    </Switch>
    <PlaybarContainer />
  </div>
);

export default App;