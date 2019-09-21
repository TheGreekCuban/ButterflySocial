import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import Streams from "./pages/Streams";
import Search from "./pages/Search"

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
              path="/"
              render={props => (
                <Home {...props} title={"WELCOME TO BUTTERFLY"} />
              )}
            />
            <Route
              exact
              path="/streams"
              render={props => (
                <Streams {...props} userID={this.state.userID} />
              )}
            />
            <Route 
              exact 
              path="/search" 
              render={props => (
                <Search {...props} title={'SEARCH STREAMS BELOW'} />
              )}
            />
          </Switch>
        </Wrapper>
      </Router>
    );
  }
}

export default App;
