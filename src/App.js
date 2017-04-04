import React, { Component } from 'react';

import './css/App.css';
import './css/Main.css';
import './css/UserForm.css';
import './css/UserProfile.css';
import './css/UserAlbum.css';
import './css/NewsPosts.css';
import './css/UserPost.css';
import './css/AlbumPhoto.css';
import './css/Media.css';

import Main from './components/Main.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        {this.props.children}
      </div>
    );
  }
}

export default App;
