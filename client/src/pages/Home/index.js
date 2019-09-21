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
    redirectTo: null
  }
  componentDidMount() {
    console.log(this.state.id)
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
      return (

        <div className="registrstionForm container-fluid mt-5">
          <h1 className="text-center">{this.props.title}</h1>
          <Row>
            <Col sm={6}>
              <h1 className="form-heading">Sign Up</h1>
              <form action="POST" className="mt-1">
                <div className="form-group row">
                  <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                  <div className="col-sm-10">
                    <input type="email" name="email" className="form-control" id="email" placeholder="email@example.com" required autoFocus value={this.state.email} onChange={this.handleInputChange} />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="staticUserName" className="col-sm-2 col-form-label">Username</label>
                  <div className="col-sm-10">
                    <input type="text" name="username" value={this.state.email.split("@")[0]} onChange={this.handleInputChange} readOnly className="form-control-plaintext" id="staticUserName" />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="inputPassword1" className="col-sm-2 col-form-label">Password</label>
                  <div className="col-sm-10">
                    <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} className="form-control" id="inputPassword1" placeholder="Password" required />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="inputPassword2" className="col-sm-2 col-form-label">Confirm Password</label>
                  <div className="col-sm-10">
                    <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleInputChange} className="form-control" id="inputPassword2" placeholder="Confirm password" required />
                  </div>
                </div>
                <button onClick={this.handleFormSubmit.signup} disabled={!(this.state.username && this.state.password)} type="button" className="btn btn-primary btn-sm" id="register">Register</button>
              </form>
              <h1 className="text-center mt-2 error">
              </h1>
            </Col>


            <Col sm={6}>
              <div className="container" id="loginsection">
                <h1 className="form-heading">login</h1>
                <div className="login-form">
                  <div className="main-div">
                    <div className="panel">
                      <p>Please enter your email and password</p>
                    </div>
                    <form id="Login">

                      <div className="form-group">


                        <input type="email" name="emailLogin" value={this.state.emailLogin} onChange={this.handleInputChange} className="form-control" id="inputEmail" placeholder="Email Address" />

                      </div>

                      <div className="form-group">

                        <input type="password" name="passwordLogin" value={this.state.passwordLogin} onChange={this.handleInputChange} className="form-control" id="inputPassword" placeholder="Password" />

                      </div>
                      <div className="forgot">
                        <a href="#">Forgot password?</a>
                      </div>
                      <button onClick={this.handleFormSubmit.login} disabled={!(this.state.emailLogin && this.state.passwordLogin)} type="submit" className="btn btn-primary">Login</button>

                    </form>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>

      )
    }
  }

  }
  // value={this.state.title} onKeyPress={this.handleInputChange}

  export default SignupPage;