import React, { Component } from "react";
import axios from "axios";
// import { ButtonContainer, Button } from "../../components/Button";
import Navigation from "../../components/Nav";
import AddMessage from "../../components/AddMessage";
import { Toast, Container, ButtonToolbar, ToggleButton, ToggleButtonGroup, Tab, Row, Col, Nav, Button } from "react-bootstrap";


class Streams extends Component {
  state = {
    streams: [],
    messages: [],
    userID: null,
    curStreamID: ""
  };

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
  componentDidMount() {
    this.getUser();
    console.log(this.state.userID);
  }

  // componentDidUpdate() {
  //   if ( this.state.userID !== this.props.userID ){
  //     this.setState({
  //       userID: this.props.userID
  //     })
  //     this.getStream()
  //   }
  //   console.log(this.props);
  // };

  unsubscribeUser(streamID) {
    // axios#put(url[, data[, config]])
    axios.post("/api/user/" + this.state.userID, {
      streamID: streamID
    }).then(res => {
      console.log(res);
      if (res.data) {
        const { streams } = this.state;
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
    axios
      .post("/api/messages/", {
        messageText: messageText,
        id: this.state.userID,
        streamID: this.state.curStreamID
      })
      .then(res => {
        console.log("Message Sent!");
      })
      .catch(err => {
        console.log(err);
      });
  };

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
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <div style={{textAlign: "center", margin: "10px 0px"}}>
                    <span style={{marginLeft:"10px", display: "inline-block", padding: "8px 0px", verticalAlign: "bottom", lineHeight: "1.5em"}} >Select Stream</span><span style={{margin: "0px 10px"}}>  |  </span>
                    <AddMessage sendMessageFunction={this.sendMessage} />
                  </div>
                  {this.state.streams.map((stream, index) => (
                    <ToggleButtonGroup type="checkbox">
                        <ToggleButton style={{width: "100%"}}variant="outline-primary" dataValue={stream._id}>{stream.streamName}
                        </ToggleButton>
                        <a></a>
                        <Button variant="link"
                        onClick={() => this.unsubscribeUser(stream._id)}
                        index={index}
                        key={index}
                        id={stream._id}
                        name={stream.streamName}
                        linkName={"Unsubscribe"}
                        style={{color: "black"}}
                        >✗
                        </Button>
                      </ToggleButtonGroup>
                  ))}
                <div>
                 
                  </div>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </Tab.Pane>
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
