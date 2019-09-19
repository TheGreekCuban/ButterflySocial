import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/Nav";
import Wrapper from "./components/Wrapper";
import SignupPage from "./pages/SignupPage";
import Streams from "./pages/Streams";

class App extends Component {
  state = {
    userID: 1234
  };
  render() {
    return (
      <Router>
        <Wrapper>
          <NavigationBar />
          <Switch>
            <Route
              exact
              path="/register"
              render={props => (
                <SignupPage {...props} title={"WELCOME TO BUTTERFLY"} />
              )}
            />
            <Route
              exact
              path="/api/streams"
              render={props => (
                <Streams {...props} userID={this.state.userID} />
              )}
            />
          </Switch>
        </Wrapper>
      </Router>
    );
  }
}

export default App;
