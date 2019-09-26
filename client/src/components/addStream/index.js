import React from "react";
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
//import "./style.css";

function addStream(props) {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create A New Stream!
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please Enter The Required Information Below!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="streamTitle">
              <Form.Label>Stream Name</Form.Label>
              <Form.Control type="text" placeholder="What Do You Want To Name Your Stream?" />
            </Form.Group>
            <Form.Group controlId="streamDescription">
              <Form.Label>What Is The Purpose Of This Stream?</Form.Label>
              <Form.Control as="textarea" rows="2" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.saveStream}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default addStream;