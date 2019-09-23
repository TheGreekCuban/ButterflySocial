import React, { Component } from "react";
import axios from "axios";
import { ButtonContainer, Button } from "../../components/Button";

class Streams extends Component {
  state = {
    streams: [],
    messages: [],
    userID: null,
  };

  // the getStream function is making a request to the server and grabbing the User document (object) within the User
  // collection
  getStream() {
    console.log(this.state.userID);
    axios
      .get("/api/user/" + this.state.userID)
      .then(response => {
        console.log("get stream response: ");
        console.log(response.data.streams);
        this.setState({
          streams: response.data.streams
        })
          // this.state.streams.push(response.data.streams)
        console.log(this.state.streams);
      });

  }
  getUser() {
    axios.get("/user/").then(response => {
      console.log("Get user response: ")
      console.log(response.data)
      if (response.data.user) {
        console.log("Get User: there is a user saved in the server session: ")
        this.setState({
          userID: response.data.user.id
        })
        console.log(this.state);
        this.getStream();
      } else {
        console.log("Get user: no user");
        this.setState({
          userID: null
        })
      }
    });
  };

  componentDidMount() {
    this.getUser()
  }

  unsubscribeUser(id) {
    
    // axios#put(url[, data[, config]])
    axios.post("/streams/:id", id)
    .then(res => {
      console.log(res)
      if(res) {
        const { streams } = this.state;

        const newStreams = streams.filter(item => item !== id);
        this.setState({ streams: newStreams });
      }
    })
  }



  render() {
    return (
      <div>
        <ButtonContainer>
          {this.state.streams.map( (stream, index) => (
            <Button 
              onClick={() => this.unsubscribeUser(stream._id)} 
              index={index} 
              id={stream._id} 
              name={stream.streamName}
              linkName={"Unsubscribe"}
            />
          ))}
          </ButtonContainer>
      </div>
    );
  }
}

export default Streams;
