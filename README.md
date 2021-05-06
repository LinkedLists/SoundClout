# SoundClout

[Live Site](https://kenny-fsp.herokuapp.com/#/)

## Description
<img src="app/assets/images/black.jpg"/>

SoundClout is a SoundCloud clone. An online music sharing platform that allows users to upload and listen to music uploaded to the site. Users can upload music, leave comments, or 
put their favorite hits on repeat.

## Technologies
* Ruby on Rails
* Javascript
* React Redux
* AWS
* HTML/CSS

## Features

### Login/Signup
* Users can login to an existing account or they can create an account by filling out the login or sign up forms.
<img src="app/assets/images/login.gif"/>

* After a user is authenticated they are redirected to to the homepage which contains featured playlists, listening history, and the playbar footer.
* If an existing user logs in then their existing listening history, current track, and current playlist are brought back.
<img src="app/assets/images/home.jpg"/>

### Persisting State
* A user's listening history, current track, and current playlist all persist on refresh for a good user experience. All information about a user's playback persist when a user signs back in as well.
* A Redux store gets cleared on refresh. So in order to save a user's play session, localStorage is used to save state.
* When certain actions are dispatched at the Redux reducers the new state gets saved into localStorage. For example, when a user plays a new track then the track gets saved into their listening
history slice of state as well as being saved into localStorage.

```js
case RECEIVE_NEW_TRACK:
  if (action.track) {
    newState.push(action.track.id)
    window.localStorage.setItem("history", JSON.stringify(newState))
    return newState
  }
```
* To retrieve data from localStorage an event listener listens for the `DOMContentLoaded` event and grabs data from localStorage. The state is then reconstructed and passed into `configureStore` which uses
the Redux method, `createStore`, to reconstruct the user's previous state. 

```js
  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      entities: { 
        users: {[window.currentUser.id]: currentUser}, 
        tracks: tracks
      },
      session: { id: window.currentUser.id },
      ui: {
        history: history,
        prevTracks: prevTracks,
        nextTrack: nextTrack,
        playlist: playlist
      }
    }
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
```

### Music Player
* Users can play tracks and navigate through the site with continuous play.
* Audio playback can be controlled by the media buttons located at the playbar footer. Users can play, pause, mute, adjust volume, loop, shuffle, and skip tracks.
* Volume swells when resuming and pausing tracks for a great user experience. Resuming and pausing a track does not immediately bring back or stop the volume. Resuming gradually brings the volume back up
and pausing a track will gradually lower the volume to 0.
* Volume swells are done by creating a `setInterval` that increases or lowers the volume. Once the volume is brought down or brought up to the previous volume, the audio is paused or resumed and the interval gets cleared.

```js
  let {audio} = this.props
  playbtn ? playbtn.classList.remove("playing") : null
  this.intervalDown = setInterval(() => {
    if (audio.volume >= this.state.volume/60 ) {
      if (this.state.volume/60 === 0 ) {
        audio.pause()
        clearInterval(this.intervalDown)
      }
      audio.volume -= this.state.volume/60 
    } else {
      audio.pause()
      clearInterval(this.intervalDown)
    }
  }, 3)
```

### Track CRUD
* Users can upload audio to the site. After uploading the user is redirected to the show page of their new track.
* (Optional) Attaching an image to the track displays a preview of the image.
* After a track is uploaded, a user can edit details about their track. User's can also change the photo that is attached to the track.
<img src="app/assets/images/crud.gif"/>

### Playlist
* A playlist based on genre gets generated when a user plays a track. Users can view their playlist by clicking on the hamburger icon on the right most side of the playbar.
* A user can change the playlist by first clicking the `Clear` button on the playlist header then selecting a new track from one of the featured playlists.
* Clicking the back button on the playbar plays the most recently played track and queues the current track to the playlist.

<img src="app/assets/images/playlist.gif"/>

### Comments
* Users can interact with other user's creations by leaving comments on their tracks.
* Users can delete their own comments as well as comments on any of their uploaded tracks.

### Listening History
* Previously played tracks are saved in to user's listening history.
* Clicking the back button on the playbar plays past tracks that the user listened to 
* Previously played tracks can be traversed by using the skip and forward buttons on the playbar footer

## Future Features
* Search feature
* Drag and drop uploading
* Improved playlist functionality
* Audio waveforms
