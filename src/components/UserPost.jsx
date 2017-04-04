import React, { Component } from 'react';

class UserPost extends Component {
  render() {
    const userPosts = this.props.userPosts;

    return (
      <div className="news-post-page">
        <div className="news-post">
          <div className="news-post-left">
            <div className="news-post-title">{userPosts.title}</div>
            <div className="news-post-body">{userPosts.body}</div>
          </div>
          <div className="news-post-right">
            <div className="id-section">
              <div className="news-post-id">USER ID</div>
              <div className="news-post-id">{userPosts.userId}</div>
              <div className="news-post-id">POST ID</div>
              <div className="news-post-id">{userPosts.id}</div>
              <div className="news-post-comment"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserPost;
