import React, { Component } from 'react';

import AlbumPhoto from './AlbumPhoto';

class UserAlbum extends Component {
  constructor(){
    super();

    this.state={
      albumPhotoFormClosed: true
    }
  }

  handleClick_myAlbum(){
    this.props.onClick_handleMyAlbum();

    const userAlbums = this.props.userAlbums;
    const albumID = userAlbums.id;
    const photoAlbumURL = `http://jsonplaceholder.typicode.com/photos?albumId=${albumID}`;

    fetch(photoAlbumURL)
    .then(response => response.json())
    .then(
      photoAlbum => {
        this.setState ({
          photoAlbum: photoAlbum,
          albumPhotoFormClosed: false
        })
      }
    )
  }

  handleAlbumExit() {
    this.setState({
      albumPhotoFormClosed: true
    })
  }

  render() {
    const userAlbums = this.props.userAlbums;
    const photoAlbum = this.state.photoAlbum;
    const userAlbum = "user-album" + (this.state.albumPhotoFormClosed ? "-active" : '');
    const albumPhoto ="photo-album" + (!this.state.albumPhotoFormClosed ? "-active" : '');

    return (
      <div className="user-album-page">
        <div className={userAlbum} onClick={this.handleClick_myAlbum.bind(this)}>
          <div className="user-album-left">
            <div className="user-album-page-title">{userAlbums.title}</div>
          </div>
          <div className="user-album-right">
            <div className="id-section">
              <div className="user-album-page-id">User ID</div>
              <div className="user-album-page-id"> {userAlbums.userId}</div>
              <div className="user-album-page-id">Album ID</div>
              <div className="user-album-page-id">{userAlbums.id}</div>
            </div>
            <div className="open-icon">
              <img src="./img/plus.png" alt="" />
            </div>
          </div>
        </div>
        <div className={albumPhoto}>
          <div className="photo-album-exit" onClick={this.handleAlbumExit.bind(this)}>
            <p>CLOSE ALBUM</p>
            <img src="./img/cancel.png" alt="" />
          </div>
          <div className="photo-album-content">
            {photoAlbum ? photoAlbum.map((photoAlbum) => <AlbumPhoto photoAlbum={photoAlbum} key={photoAlbum.id}/>) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default UserAlbum;
