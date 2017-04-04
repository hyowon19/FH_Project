import React, { Component } from 'react';
import UserForm from './UserForm';
import UserProfile from './UserProfile';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      currentInput: "",
      usersData: [],
      userProfileData: [],
      isUser: false,
      userLoggedIn: "",
      loginSuccess: false,
      userFormClosed: true,
      userProfileFormClosed: true
    }
  }

  fetchData() {
    var usersURL = `http://jsonplaceholder.typicode.com/users/`;

    fetch(usersURL)
    .then(response => response.json())
    .then(
      usersData => {
        this.setState ({
          usersData: usersData
        })
      }
    )
  }

  componentDidMount() {
    this.fetchData();
  }

  handleInput(event) {
    var value = event.target.value;
    this.setState({
      currentInput: value
    });
  }

  handleSubmit_login(){
    const usersData = this.state.usersData;

    for(var i=0; i<usersData.length; i++) {
      if(this.state.currentInput === usersData[i].username) {
        this.setState({
          isUser: "true",
          userLoggedIn: usersData[i].username,
          loginSuccess: true,
          userFormClosed: false,
          loggedInUserID: usersData[i].id
        })
      }
    }
  }

  handleClick_logout() {
    this.setState({
      loginSuccess: false,
      userFormClosed: true,
      userLoggedIn: "",
      currentInput: "",
      loggedInUserID: null,
      userProfileFormClosed: true,
      userProfileData: []
    })
  }

  handleClick_profile() {
    this.setState({
      userFormClosed: true,
      loginSuccess: true,
      userProfileFormClosed: false
    })

    const userProfileID = this.state.loggedInUserID;
    const userProfileURL = `http://jsonplaceholder.typicode.com/users/${userProfileID}`;

    fetch(userProfileURL)
    .then(response => response.json())
    .then(
      userProfileData => {
        this.setState ({
          userProfileData: userProfileData
        })
      }
    )
  }

  handleClick_exitProfile(){
    this.setState({
      userProfileFormClosed: true,
      userFormClosed: false
    })
  }

  render() {
    const userProfileData = this.state.userProfileData;
    const userID = this.state.loggedInUserID;
    const userName = this.state.userLoggedIn;

    return (
      <div className="main">
        <div className="main-header">
          <div className="main-header-title">FH</div>
          {this.state.loginSuccess ?
            <div className="main-header-profile">
              <div className="main-header-user">
                <div className="main-header-user-logged-in" onClick={this.handleClick_profile.bind(this)}>{this.state.userLoggedIn}</div>
              </div>
              <div className="main-header-logout" onClick={this.handleClick_logout.bind(this)}>LOGOUT</div>
            </div>
          : null}
        </div>
        {!this.state.loginSuccess ?
          <div className="login">
            <img src="./img/fh-logo.png" alt=""/>
            <form className="login-form" onSubmit={this.handleSubmit_login.bind(this)}>
              <input onInput={this.handleInput.bind(this)} ref="userInput" className="login-form-input" type="text" placeholder="Enter username" />
              <button className="login-form-button">LOGIN</button>
            </form>
          </div>
        : null}
        {!this.state.userFormClosed ? <UserForm
          userName={userName}
          userID={userID} />
        : null}
        {!this.state.userProfileFormClosed ? <UserProfile
          userProfileData={userProfileData}
          onClick_handleExit={this.handleClick_exitProfile.bind(this)} />
        : null}
        <div className="footer">&copy; 2017 You_Won't_Regret_Hiring_Me Corp.</div>
      </div>
    );
  }
}

export default Main;
