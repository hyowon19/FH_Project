import React, { Component } from 'react';

class NewsPost extends Component {
  constructor(){
    super();

    this.state={
      commentFormClosed: true,
      currentCommentInput: "",
      limit: ""
    }
  }

  handleClick_comment() {
    this.setState({
      commentFormClosed: false
    })
  }

  handleClick_send() {
    alert('Your messages has been sent.');
    const newsPostsURL = `http://jsonplaceholder.typicode.com/posts/`;

    const payload={
      body: this.state.currentCommentInput,
      userId: this.props.userID
    }

    fetch(newsPostsURL, {
      method: 'post',
      headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(
      newsPosts => {
        this.setState({
          newsPosts: newsPosts,
          commentFormClosed: true,
          currentCommentInput: ''
        });
      }
    );
  }

  handleClick_cancel() {
    this.setState({
      commentFormClosed: true,
      currentCommentInput: ''
    })
  }

  handleInput_body(event){
    var value = event.target.value;
    if(value.length <= this.props.limit) {
      this.setState({
        currentCommentInput: value
      });
    }
  }

  render() {
    const newsPosts = this.props.newsPosts;

    return (
      <div className="news-post-page">
        <div className="news-post">
          <div className="news-post-left">
            <div className="news-post-title">{newsPosts.title}</div>
            <div className="news-post-body">{newsPosts.body}</div>
          </div>
          <div className="news-post-right">
            <div className="id-section">
              <div className="news-post-id">USER ID</div>
              <div className="news-post-id">{newsPosts.userId}</div>
              <div className="news-post-id">POST ID</div>
              <div className="news-post-id">{newsPosts.id}</div>
              <div className="news-post-comment"></div>
            </div>
            <div className="comment-button" onClick={this.handleClick_comment.bind(this)}>
              <img src="./img/comment.png" alt=""/>
            </div>
          </div>
        </div>
        {!this.state.commentFormClosed ?
          <div className="comment-box">
            <div className="comment-box-left">
              <textarea className="comment-body" onInput={this.handleInput_body.bind(this)} type="text" value={this.state.currentCommentInput} />
              <div className="comment-body-limit">{this.props.limit-this.state.currentCommentInput.length}</div>
            </div>
            <div className="comment-box-right">
              <div className="cancel-button" onClick={this.handleClick_cancel.bind(this)}>
                <img src="./img/cancel.png" alt=""/>
              </div>
              <div className="send-button" onClick={this.handleClick_send.bind(this)}>
                <img src="./img/send.png" alt="" />
              </div>
            </div>
          </div>
        : null}
      </div>
    );
  }
}

export default NewsPost;
