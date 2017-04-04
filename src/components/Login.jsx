import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      currentInput: "",
      isUser: "false",
      userLoggedIn: ""
    }
  }

  handleInput(event) {
    var value = event.target.value;
    this.setState({
      currentInput: value
    });
  }

  // isUser(user) {
  //   return this.state.currentInput === userData[user].username
  // }

  handleSubmit_login() {
    this.props.onSubmitLogin();

    // event.preventDefault();

    const userData = this.props.userData;

    if(this.state.currentInput === "Bret") {
      this.setState({
        userId: "1",
        userLoggedIn: "Bret",
        loginSuccess: true,
        userFormClosed: false,
        isUser: "true"
      })
    }

    else {
      this.setState({
        isUser: "false",
        userLoggedIn: "",
        loginSuccess: false,
        userFormClosed: true
      })
    }


    // else if(this.state.currentInput === "Antonette") {
    //   this.setState({
    //     userId: "2",
    //     userLoggedIn: "Antonette",
    //     loginSuccess: true,
    //     userFormClosed: false
    //   })
    // }
    // else if(this.state.currentInput === "Samantha") {
    //   this.setState({
    //     userId: "3",
    //     userLoggedIn: "Samantha",
    //     loginSuccess: true,
    //     userFormClosed: false
    //   })
    // }
    // else if(this.state.currentInput === "Karianne") {
    //   this.setState({
    //     userId: "4",
    //     userLoggedIn: "Karianne",
    //     loginSuccess: true,
    //     userFormClosed: false
    //   })
    // }
    // else if(this.state.currentInput === "Kamren") {
    //   this.setState({
    //     userId: "5",
    //     userLoggedIn: "Kamren",
    //     loginSuccess: true,
    //     userFormClosed: false
    //   })
    // }
    // else if(this.state.currentInput === "Leopoldo_Corkery") {
    //   this.setState({
    //     userId: "6",
    //     userLoggedIn: "Leopoldo_Corkery",
    //     loginSuccess: true,
    //     userFormClosed: false
    //   })
    // }
    // else if(this.state.currentInput === "Elwyn.Skiles") {
    //   this.setState({
    //     userId: "7",
    //     userLoggedIn: "Elwyn.Skiles",
    //     loginSuccess: true,
    //     userFormClosed: false
    //   })
    // }
    // else if(this.state.currentInput === "Maxime_Nienow") {
    //   this.setState({
    //     userId: "8",
    //     userLoggedIn: "Maxime_Nienow",
    //     loginSuccess: true,
    //     userFormClosed: false
    //   })
    // }
    // else if(this.state.currentInput === "Delphine") {
    //   this.setState({
    //     userId: "9",
    //     userLoggedIn: "Delphine",
    //     loginSuccess: true,
    //     userFormClosed: false
    //   })
    // }
    // else if(this.state.currentInput === "Moriah.Stanton") {
    //   this.setState({
    //     userId: "10",
    //     userLoggedIn: "Moriah.Stanton",
    //     loginSuccess: true,
    //     userFormClosed: false
    //   })
    // }

    // this.setState({
    //   isUser: "true",
    //   // userLoggedIn: userData[i].username,
    //   loginSuccess: true,
    //   userFormClosed: false
    // })


    // for(var i=0; i<userData.length; i++) {
    //   if(this.state.currentInput === userData[i].username) {
    //     this.setState({
    //       isUser: "true",
    //       userLoggedIn: userData[i].username,
    //       loginSuccess: true,
    //       userFormClosed: false
    //     })
    //   }
    //   else {
    //     this.setState({
    //       isUser: "false",
    //       userLoggedIn: "",
    //       loginSuccess: false,
    //       userFormClosed: true
    //     })
    //   }
    // }
  }


  render() {
    // const userData = this.props.userData;

    return (
      <div className="login">
        <p>Login Area</p>
        <form className="login-form" onSubmit={this.handleSubmit_login.bind(this)}>
          <input onInput={this.handleInput.bind(this)} ref="userInput" className="login-form-input" type="text" placeholder="Enter username" />
          <button className="login-form-button">LOGIN</button>
        </form>
        <p>{this.state.currentInput}</p>
        <p>isUser? {this.state.isUser}</p>
        <p>Username will appear for a split second if true: {this.state.userLoggedIn}</p>
      </div>
    );
  }
}

export default Login;
