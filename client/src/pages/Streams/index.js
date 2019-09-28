import React, { Component } from "react";
import axios from "axios";
// import { ButtonContainer, Button } from "../../components/Button";
import Navigation from "../../components/Nav";
import AddMessage from "../../components/AddMessage";
import { Toast, Container, ButtonToolbar, ToggleButton, ToggleButtonGroup, Tab, Row, Col, Nav, Button } from "react-bootstrap";
import "./style.css";


class Streams extends Component {
  state = {
    streams: [],
    messages: [],
    userID: null,
    curStreamID: "",
    intervalID: ""
  };

  componentDidMount() {
    this.getUser();
  }

  // this function acts as a database watcher, getting messages every 5 seconds
  messageWatcher = (streamID) => {
    console.log(streamID)
    this.setState({
      intervalID: setInterval( () => { 
        this.getMessages(streamID)
      }, 5000)
    })
    console.log("timeout")
    console.log(this.state.intervalID);
  }

  // the getStream function is making a request to the server and grabbing the User document (object) within the User collection
  getStream() {
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
      console.log("Get user response: ");
      console.log(response.data);
      if (response.data.user) {
        console.log("Get User: there is a user saved in the server session: ");
        this.setState({
          userID: response.data.user.id
        });
        console.log(this.state);
        this.getStream();
      } else {
        console.log("Get user: no user");
        this.setState({
          userID: null
        });
      }
    });
  }

  unsubscribeUser(streamID) {
    // axios#put(url[, data[, config]])
    axios.post("/api/user/" + this.state.userID, {
      streamID: streamID
    }).then(res => {
      console.log(res);
      if (res.data) {
        // const { streams } = this.state;
        this.setState({
          streams: res.data.streams
        });
      }
    })
    .catch(err => {
      console.log(err)
    })
  }

  sendMessage = messageText => {
    console.log(messageText);
    console.log(this.state.userID);
    console.log(this.state.curStreamID);
    // let newMessageID;
    axios
      .post("/api/messages/", {
        messageText: messageText,
        id: this.state.userID,
      })
      .then(res => {
        console.log("message sent!")
        console.log(res.data);
        // then make PUT request to add this message to stream document
        let newMessageID = res.data._id;
        console.log(newMessageID)
        // after getting response that message has been successfully created, put it into the selected streams document
        axios.put("/api/streams/" + this.state.curStreamID, {
          messageID: newMessageID
        })
        .then(response => {
          console.log("message saved on stream")
          console.log(response);
          this.setState({
            messages: response.data.messages.reverse()
          }, () => {
            console.log(this.state.messages);
          });
        })
        .catch(error => {
          console.log("error saving message to stream")
          console.log(error)
        })
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleStreamToggle = (event) => {
    event.preventDefault();
    // stops the interval first before starting another one
    clearInterval(this.state.intervalID);
    console.log(event.target.getAttribute("datavalue"));
    this.setState({
      curStreamID: event.target.getAttribute("datavalue")
    }, () => {
      this.getMessages(this.state.curStreamID)
      // starts the interval
      this.messageWatcher(this.state.curStreamID)
     })
    console.log(this.state.curStreamID);
  }

  getMessages = (streamID) => {
    console.log(streamID)
    axios.get("/api/streams/" + streamID)
    .then(response => {
      console.log(response)
      this.setState({
        messages: response.data.messages.reverse()
      }, () => {
        console.log(this.state.messages);
      });
    })
    .catch(error => console.log(error))
  }

  render() {
    if(!this.state.streams || !this.state.streams.length) {
      return(
        <div style={{marginTop: "10px"}}>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                </Nav>
              </Col>
              <Col sm={9}>
                  <Tab.Content>
                    <Toast>
                      <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                        <strong className="mr-auto">Butterfly Help</strong>
                        {/* <small>11 mins ago</small> */}
                      </Toast.Header>
                      <Toast.Body>Get started by subscribing to an available <a href="/search">stream</a></Toast.Body>
                    </Toast>
                  </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      )
    } else {
      return (
        <div style={{marginTop: "10px"}}>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              {/* Render the stream buttons in a left-hand side column */}
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <div style={{ margin: "10px 0px"}}>
                    {/* <span style={{marginLeft:"10px", display: "inline-block", padding: "8px 0px", verticalAlign: "bottom", lineHeight: "1.5em"}} >Select Stream</span><span style={{margin: "0px 10px"}}>  |  </span> */}
                    <AddMessage sendMessageFunction={this.sendMessage} />
                  </div>
                  {/* Loop through streams that user has subscribed to and render them on the page */}
                  {this.state.streams.map((stream, index) => (
                    <Nav.Item>
                      {/* Streams button */}
                      <Nav.Link eventKey={index}
                        style={{width: "100%"}}
                        datavalue={stream._id}
                        onClick={this.handleStreamToggle}>
                        {stream.streamName}
                      {/* unsubscribe button */}
                      <Button variant="link"
                        onClick={() => this.unsubscribeUser(stream._id)}
                        index={index}
                        key={index}
                        id={stream._id}
                        name={stream.streamName}
                        linkName={"Unsubscribe"}
                        style={{color: "red"}}
                        >✗
                      </Button>
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </Col>
              {/* Content area rendering in right-hand large column */}
              <Col sm={7}>
                <Tab.Content>
                  {/* <Tab.Pane eventKey="first">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </Tab.Pane> */}
                  {this.state.messages.map((messageObject, index) => (
                    <Toast style={{margin: "5px auto"}}>
                      <Toast.Header>
                      <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                      <strong className="mr-auto" style={{color: "coral"}}>{messageObject.user.username}</strong>
                      <small>{messageObject.date}</small>
                      </Toast.Header>
                      <Toast.Body>{messageObject.body}</Toast.Body>
                    </Toast>
                  ))}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
        // <Container>
        //     <ButtonToolbar>
        //       <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]}>
        //         {this.state.streams.map((stream, index) => (
        //           <ToggleButton variant="outline-secondary" value={stream._id}>{stream.streamName}</ToggleButton>
        //         ))}
        //       </ToggleButtonGroup>
        //     </ButtonToolbar>
        //   <ButtonContainer>
        //     {this.state.streams.map((stream, index) => (
        //       <Button
        //         onClick={() => this.unsubscribeUser(stream._id)}
        //         index={index}
        //         key={index}
        //         id={stream._id}
        //         name={stream.streamName}
        //         linkName={"Unsubscribe"}
        //       />
        //     ))}
        //   </ButtonContainer>
        //   <AddMessage sendMessageFunction={this.sendMessage} />
        // </Container>
      );
    }
  }
}

export default Streams;
