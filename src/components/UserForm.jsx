import React, { Component } from 'react';

import NewsPosts from './NewsPosts';
import UserPost from './UserPost';
import UserAlbum from './UserAlbum';

class UserForm extends Component {
  constructor() {
    super();

    this.state={
      userPosts:[],
      newsPosts:[],
      userAlbums:[],
      newsFormClosed: false,
      myPostsFormClosed: true,
      myAlbumsFormClosed: true,
      albumPhotoFormClosed: true
    }
  }

  fetchData() {
    const newsPostsURL = `http://jsonplaceholder.typicode.com/posts/`;

    fetch(newsPostsURL)
    .then(response => response.json())
    .then(
      newsPosts => {
        this.setState ({
          newsPosts: newsPosts
        })
      }
    )
  }

  componentDidMount() {
    this.fetchData();
  }

  handleClick_news() {
    this.setState({
      newsFormClosed: false,
      myPostsFormClosed: true,
      myAlbumsFormClosed: true
    })
  }

  handleClick_myPosts() {
    const userID = this.props.userID;
    const userPostsURL = `http://jsonplaceholder.typicode.com/posts?userId=${userID}`;

    fetch(userPostsURL)
    .then(response => response.json())
    .then(
      userPosts => {
        this.setState ({
          userPosts: userPosts,
          newsFormClosed: true,
          myPostsFormClosed: false,
          myAlbumsFormClosed: true
        })
      }
    )
  }

  handleClick_myAlbums() {
    const userID = this.props.userID;
    const userAlbumsURL = `http://jsonplaceholder.typicode.com/albums?userId=${userID}`;

    fetch(userAlbumsURL)
    .then(response => response.json())
    .then(
      userAlbums => {
        this.setState ({
          userAlbums: userAlbums,
          newsFormClosed: true,
          myPostsFormClosed: true,
          myAlbumsFormClosed: false
        })
      }
    )
  }

  handleClick_myAlbum(){
    this.setState({
      newsFormClosed: true,
      myPostsFormClosed: true
    })
  }

  handleClick_myAlbumExit() {
    this.setState({

    })
  }

  render() {
    const userPosts = this.state.userPosts;
    const newsPosts = this.state.newsPosts;
    const userAlbums = this.state.userAlbums;
    const userID = this.props.userID;

    const newsForm = "user-page-news" + (!this.state.newsFormClosed ? "-active" : '');
    const myPostsForm = "user-page-myPosts" + (!this.state.myPostsFormClosed ? "-active" : '');
    const myAlbumsForm = "user-page-myAlbums" + (!this.state.myAlbumsFormClosed ? "-active" : '');

    const newsContent = "user-content-news" + (!this.state.newsFormClosed ? "-active" : '');
    const myPostsContent = "user-content-myPosts" + (!this.state.myPostsFormClosed ? "-active" : '');
    const myAlbumsContent = "user-content-myAlbums" + (!this.state.myAlbumsFormClosed ? "-active" : '');

    return (
      <div className="user-page">
        <div className="user-page-navBar">
          <div className={newsForm} onClick={this.handleClick_news.bind(this)}>NEWS</div>
          <div className={myPostsForm} onClick={this.handleClick_myPosts.bind(this)}>MY POSTS</div>
          <div className={myAlbumsForm} onClick={this.handleClick_myAlbums.bind(this)}>MY ALBUMS</div>
        </div>
        <div className="user-page-content">
          <div className={newsContent}>
            {newsPosts ? newsPosts.map((newsPosts) =>
              <NewsPosts
                userID={userID}
                limit={200}
                newsPosts={newsPosts}
                key={newsPosts.id}/>)
            : null}
          </div>
          <div className={myPostsContent}>
            {userPosts ? userPosts.map((userPosts) => <UserPost userPosts={userPosts} key={userPosts.id}/>) : null}
          </div>
          <div className={myAlbumsContent}>
            {userAlbums ? userAlbums.map((userAlbums) =>
              <UserAlbum
                onClick_handleMyAlbum={this.handleClick_myAlbum.bind(this)}
                onClick_handleMyAlbumExit={this.handleClick_myAlbumExit.bind(this)}
                userAlbums={userAlbums}
                key={userAlbums.id}/>) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default UserForm;
