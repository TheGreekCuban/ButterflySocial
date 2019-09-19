import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./components/Pages/Nav";
import Wrapper from "./components/Pages/Wrapper";
import SignupPage from "./components/Pages/SignupPage";
import Streams from "./components/Pages/Streams";

function App() {
  return (
    <Router>
      <Wrapper>
      <NavigationBar />
      <Switch>
        <Route exact path="/register" render={(props) => <SignupPage {...props} title={'WELCOME TO BUTTERFLY'} />} />
        <Route exact path="/api/streams" render={(props) => <Streams {...props} title={'SEE ALL STREAMS BELOW'} />} />
      </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;
