import React from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import './style.css'

const NavigationBar = (props)=> {
    return (
        <Navbar bg="dark" expand="lg">
            <Navbar.Brand href="/">Butterfly</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    {/* <Nav.Link href="/register">Sign Up</Nav.Link> */}
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
<<<<<<< HEAD
                        <NavDropdown.Item href="/api/search">Search Streams</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
=======
                        <NavDropdown.Item href="/streams">Streams</NavDropdown.Item>
                        <NavDropdown.Item href="/search">Search</NavDropdown.Item>
                        {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
>>>>>>> aefea84120e1a2cfa8548bd372ed1f0054a0753b
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={props.logoutFunction}>Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar;
