import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import API from "../../utils/API"
//import "./style.css";

class AddStream extends Component {

  state = {
    streamName: "",
    streamDescription: "",
    show: false,
    setShow: false
  }

  handleInputChange = event => {
    const { name, value }  = event.target
    
    this.setState({[name]: value}) 
  }

  saveStream = event => {
    console.log("STREAM EVENT: ", event.target.value)

    let userData = {
      streamName: this.state.streamName,
      streamDescription: this.state.streamDescription
    }
    API.saveStream(userData)
  }

  handleClose = () => {
    this.setState({
      show: false,
      setShow: false
    });
    console.log(this.state.setShow);
  };

  handleShow = () => {
    this.setState({
      show: true,
      setShow: true
    });
    console.log(this.state.setShow);
  };

  render() {
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          Create A New Stream!
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Please Enter The Required Information Below!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="streamTitle">
                <Form.Label>Stream Name</Form.Label>
                <Form.Control 
                  onChange={this.handleInputChange} 
                  value= {this.state.streamName}
                  type="text" 
                  placeholder="What Do You Want To Name Your Stream?" />
              </Form.Group>
              <Form.Group controlId="streamDescription">
                <Form.Label>What Is The Purpose Of This Stream?</Form.Label>
                <Form.Control 
                  value={this.state.streamDescription}
                  onChange={this.handleInputChange}
                  as="textarea" 
                  rows="2" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.saveStream}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default AddStream;