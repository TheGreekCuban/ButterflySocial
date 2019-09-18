import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/Nav";
import Wrapper from "./components/Wrapper";
import SignupPage from "./components/SignupPage";

function App() {
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
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;
