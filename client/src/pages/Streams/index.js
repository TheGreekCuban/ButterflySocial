import React, { Component } from "react";
import axios from "axios";
import { ButtonContainer, Button } from "../../components/Button";

class Streams extends Component {
  state = {
    streams: [],
    messages: []
  };

  getStream() {
    axios
      .get("/api/streams/", {
        userID: this.props.userID
      })
      .then(response => {
        console.log("get stream response: ");
        console.log(response);
        this.setState({
          streams: response.data.streams
        });
      });
  }
  // the getStream function is making a request to the server and grabbing the User document (object) within the User
  // collection
  componentDidMount() {
    this.getStream();
  }

  render() {
    return (
      <ButtonContainer>
        {this.state.streams.map(button => (
          <Button streamName={button} />
        ))}
      </ButtonContainer>
    );
  }
}

export default Streams;
