import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import Streams from "./pages/Streams";
import Search from "./pages/Search";
import Axios from "axios";

class App extends Component {
  state = {
    userID: null,
    loggedIn: false,
    whocalled: ""
  };

  componentDidMount() {
    this.getUser();
  }
  
  // route for checking to see if user in the database
  getUser() {
    Axios.get("/user/").then(response => {
      let activeUser
      console.log("Get user response: ")
      console.log(response.data)
      if (response.data.user) {
        console.log("Get User: there is a user saved in the server session: ")
        this.setState({
          loggedIn: true,
          userID: response.data.user.id
        })
        console.log(this.state);
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          userID: null
        })
      }
    });
  };

  //added logout function, pass into nav as props
  handleLogout = event => {
    event.preventDefault();
    Axios.post("/api/user/logout")
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          document.location.href = "/"
        }
      }).catch(error => {
        console.log("Logout error")
      })
  }

  fromHome = ()=> {
    this.setState({loggedIn: true})
  }

  render() {
    return (
      <Router>
        <Wrapper>
          <NavigationBar {...this.state} logoutFunction={this.handleLogout} />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Home {...this.state} fromHome={this.fromHome} title={"WELCOME TO BUTTERFLY"} />
              )}
            />
            <Route
              exact
              path="/streams"
              render={props => (
                <Streams {...this.state} unserID={this.state.userID} />
              )}
            />
            <Route
              exact
              path="/search"
              render={props => (
                <Search {...this.state} title={'SEARCH STREAMS BELOW'} />
              )}
            />
          </Switch>
        </Wrapper>
      </Router>
    );
  }
}

export default App;
