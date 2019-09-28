import React, { Component } from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import './style.css';
import axios from "axios";


class NavigationBar extends Component {
    state = {
        loggedIn: false
      };

    getUser() {
        axios.get("/user/").then(response => {
          console.log(response.data)
          if (response.data.user) {
            this.setState({
              loggedIn: true
            })
          } else {
            this.setState({
              loggedIn: false
            })
          }
        });
      };
      // componentDidMount() {
      //   this.getUser()
      // }
      componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state.loggedIn)
        console.log(prevState.loggedIn)
        console.log(prevProps.loggedIn)
          console.log(this.props.loggedIn)
          console.log(this.props.whocalled)
          if (this.props.loggedIn !== prevProps.loggedIn){
            this.getUser()
          }
      }

    options = ()=> {
        if (this.state.loggedIn){
            return (
              <Nav className="mr-auto">
                <Nav.Link href="/streams">Streams</Nav.Link> 
                <Nav.Link href="/search">Search</Nav.Link> 
                <NavDropdown.Divider />
                <Nav.Link onClick={this.props.logoutFunction}>Logout</Nav.Link>
              </Nav>
            )
        } else {
            return ""
        }
    }
    
    render (){
        return (
        <Navbar bg="dark" expand="lg">
            <Navbar.Brand href="/streams">Butterfly</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {this.options()}
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
        )
    }
}

export default NavigationBar;
