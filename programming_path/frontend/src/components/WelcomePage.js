import React, { Component } from "react";
import Quotable from "./Quotable";
import LoginPage from "./LoginPage"
import LoginNewUserPage from "./LoginNewUserPage"


export default class WelcomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      register: false,
      buttonsReveal: false,
    }
  }

  render() {
    return (
      <div id="welcome">
        <br></br>
        <h1><span class="center animate-character">Path of Programming</span></h1>
        <br></br>
        <div id="quote">
          <Quotable />
        </div>
        <br></br>
        <div id="challenge">
          <h2>Learning is a lifelong journey. Do you accept?</h2>
          {!this.state.buttonsReveal && <button class="special-button" onClick={()=>this.setState({buttonsReveal: true})}>I accept this challenge</button>}
        </div>
          
        {this.state.buttonsReveal && 
          <div id="pop-up">
            <button class="non-special-button" onClick={()=>this.setState({login: true, register: false})}>Login</button>
            <button class="non-special-button" onClick={()=>this.setState({login: false, register: true})}>Register</button>
            {this.state.login && <LoginPage />}
            {this.state.register && <LoginNewUserPage />}
          </div>  
        }
      </div>
    );
  }
}