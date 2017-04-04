import React, { Component } from 'react';

class AlbumPhoto extends Component {
  constructor(){
    super();

    this.state={

    }
  }

  render() {
    const photoAlbum = this.props.photoAlbum;

    return (
      <div className="album-photo">
        <a href={photoAlbum.thumbnailUrl}>
          <img src={photoAlbum.thumbnailUrl} alt=""/>
        </a>
      </div>
    );
  }
}

export default AlbumPhoto;
