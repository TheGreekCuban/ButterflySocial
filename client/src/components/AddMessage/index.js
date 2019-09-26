import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

// const [show, setShow] = useState(false);

class AddMessage extends Component {
  state = {
    message: "",
    show: false,
    setShow: false
  };

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

  handleFormChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSendMessage = (event) => {
    event.preventDefault();
    this.props.sendMessageFunction(this.state.message);
    this.handleClose();
  }

  render() {
    // const [show, setShow] = React.useState(false);
    return (
      <React.Fragment>
        <Button variant="link" style={{display: "inline-block"}} onClick={this.handleShow}>
        <img style={{maxHeight: "19px", display: "inline-block", marginRight: "10px"}}
          src="/images/add_icon.png"
          />
          <h5 style={{display: "inline-block", verticalAlign: "bottom", lineHeight: "1.5em"}}>Let's Talk About It</h5>
        </Button>


        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Message</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Write text here</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  name="message"
                  onChange={this.handleFormChange}
                  value={this.state.message}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={this.handleSendMessage}
            >
              Send
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

export default AddMessage;
