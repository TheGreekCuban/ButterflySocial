import React, { Component } from 'react'
import './style.css'
import API from "../../utils/API";
import { Container, Row, Col } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import Axios from 'axios';

class SignupPage extends Component {
  state = {
    email: "",
    emailLogin: "",
    username: "",
    password: "",
    passwordLogin: "",
    confirmPassword: "",
    id: "",
    redirectTo: null,
    videoURL: "./assest/video/butterflyVID.mp4"
  }
  componentDidMount() {
    console.log(this.state.id)
    console.log(this.state.loggedIn)
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(name)
    console.log(value)

    this.setState({
      [name]: value,
      username: this.state.email.split("@")[0]
    });
  };

  handleFormSubmit = {
    signup: (event) => {
      event.preventDefault();
      if (this.state.email && this.state.password) {
        API.saveUser({
          email: this.state.email,
          username: this.state.username,
          password: this.state.password,
          confirmPassword: this.state.confirmPassword
        })
          .then(res => {
            console.log(res.data._id);
            this.setState({
              id: res.data._id,
              redirectTo: "/streams"
            })
          })
          .catch(err => console.log(err));
      }
    },
    login: (event) => {
      event.preventDefault();
      if (this.state.emailLogin && this.state.passwordLogin) {
        API.logUserIn({
          username: this.state.emailLogin,
          password: this.state.passwordLogin
        })
          .then(res => {
            console.log(res)
            this.setState({
              id: res.data.id,
              redirectTo: "/streams"
            })
          })
          .catch(err => console.log(err));
      }
    }
  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      if (this.props.loggedIn) {
        return ('')
      } else {
        return (

          <div id="page" class="page">
          <div className="back-image header11" style={{cursor: "pointer", outlineOffset: "-2px"}}>
        <div className="mid-className">
          <div className="art-right">
            <h2 style={{outline: "none", cursor: "inherit"}}>Sign In and Sign Up</h2>
            <form action="#" method="post">
              <div className="main">
                <div className="form-left-to-w3l" style={{outline: "none", cursor: "inherit"}}>
                <input type="email" name="emailLogin" value={this.state.emailLogin} onChange={this.handleInputChange} id="inputEmail" placeholder="Email Address" required=""/>
                </div>
                <div className="form-left-to-w3l">
                <input type="password" name="passwordLogin" value={this.state.passwordLogin} onChange={this.handleInputChange} className="form-control" id="inputPassword" placeholder="Password" required="" />
                  <div className="clear"></div>
                </div>
              </div>
              <div className="left-side-forget">
                <input type="checkbox" className="checked" />
                <span className="remenber-me" style={{outline: "none", cursor: "inherit"}}>Remember me </span>
              </div>
              <div className="right-side-forget">
                <a href="#" className="for medium-editor-placeholder" style={{outline: "none", cursor: "inherit", outlineOffset: "-2px"}}><p><br></br></p></a>
              </div>
              <div className="clear"></div>
              <div className="btnn">
              <button onClick={this.handleFormSubmit.login} disabled={!(this.state.emailLogin && this.state.passwordLogin)} type="submit" className="btn btn-primary">Sign In</button>
              </div>
            </form>
            <div className="w3layouts_more-buttn">
              <h3>Don't Have an account..?
                <a href="#content1">Sign Up Here
                </a>
              </h3>
            </div>
            {/* popup */}
            <div id="content1" className="popup-effect">
              <div className="popup">
                {/* login form */}
                <div className="letter">
                  <form action="#" method="post">
                    <div className="form-left-to-w3l" style={{outline: "none", cursor: "inherit"}}>
                    <input type="text" name="username" value={this.state.email.split("@")[0]} onChange={this.handleInputChange} readOnly className="form-control-plaintext" id="staticUserName" required="" />
                    </div>
                    <div className="form-left-to-w3l" style={{outline: "none", cursor: "inherit"}}>
                    <input type="email" name="email" id="email" placeholder="email@example.com" required="" autoFocus value={this.state.email} onChange={this.handleInputChange} />
                    </div>
                    <div className="form-left-to-w3l" style={{outline: "none", cursor: "inherit"}}>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} id="inputPassword1" placeholder="Password" required="" />
                    </div>
                    <div className="form-left-to-w3l margin-zero" style={{outline: "none", cursor: "inherit"}}>
                    <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleInputChange} id="inputPassword2" placeholder="Confirm password" required="" />
                    </div>
                    <div className="btnn">
                      <button onClick={this.handleFormSubmit.signup} disabled={!(this.state.username && this.state.password)} type="submit" style={{outline: "none", cursor: "inherit"}} className="btn" id="register">Sign Up</button>
                      <br></br>
                    </div>
                  </form>
                  <div className="clear"></div>
                </div>
                {/* close login form */}
                <a className="close" href="#">×</a>
              </div>
            </div>
            {/* close popup */}
          </div>
          <div className="art-left medium-editor-element" data-medium-editor-element="true" aria-multiline="true" data-medium-editor-editor-index="10" medium-editor-index="0ee9d778-a1e5-556b-946b-157a6d3ee7f2" data-placeholder="Type your text">
            <h1 className="header" style={{outline: "none", cursor: "inherit", outlineOffset: "-2px"}}>welcome to butterfly!</h1>
          </div>
        </div>
        <footer className="bottom-footer">
          <p>
            © 2019 Butterfly. |  Design by
            <a href="https://whithedel.github.io" target="_blank">Whithedel Carré</a>
          </p>
        </footer>
      </div>
      </div>

        )
      }
    }
  }

}
// value={this.state.title} onKeyPress={this.handleInputChange}

export default SignupPage;