import React, { Component } from "react";

class SignupPage extends Component {
  render() {
    return (
      <div className="registrstionForm container-fluid mt-5">
        <h1 className="text-center">{this.props.title}</h1>
        <form action="POST">
          <div className="form-group row">
            <label for="email" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="email@example.com"
                required
                autofocus
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="staticUserName" className="col-sm-2 col-form-label">
              Username
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                readOnly
                className="form-control-plaintext"
                id="staticUserName"
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="inputPassword1" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword1"
                placeholder="Password"
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="inputPassword2" className="col-sm-2 col-form-label">
              Confirm Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword2"
                placeholder="Confirm password"
                required
              />
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            id="register"
          >
            Register
          </button>
        </form>
        <h1 className="text-center mt-2 error">This is a placeholder, gives error if there is no content in header tags.</h1>
      </div>
    );
  }
}
// value={this.state.title} onKeyPress={this.handleInputChange}

export default SignupPage;
