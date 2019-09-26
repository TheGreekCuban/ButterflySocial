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

  render() {
    // const [show, setShow] = React.useState(false);
    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>
          Let's Talk About It
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
              onClick={this.props.sendMessageFunction(this.state.message)}
            >
              Send
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddMessage;
