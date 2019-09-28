import React, {Component} from 'react'
import { Redirect } from "react-router-dom"
import API from "../../utils/API";
import { StreamCard, StreamCardItem } from "../../components/StreamCard"
import SearchForm from "../../components/SearchForm"
import AddStream from "../../components/addStream"
import { CardDeck, Card, Button } from 'react-bootstrap/'

class Search extends Component {
    state = {
        streams: [],
        displayedStreams: [],
        userID: "",
        search: "",
        error: "",
        redirectTo: null
    }

    searchStreams() {
        API.searchStreams()
        .then(response => {
            this.setState({streams: response.data, search: "", error: "", displayedStreams: response.data})
        })      
        .catch(err => console.log(err));
    }

    componentDidUpdate() {
      if ( this.state.userID !== this.props.userID ){
        this.setState({
          userID: this.props.userID
        })
        this.searchStreams()
      }
    }
 
    addUserToStream = event => {
      event.preventDefault()
      const userID = event.target.getAttribute("data-userid")
      const saveData = {
        streamID : event.target.getAttribute("data-streamid")
      }
      API.addUserToStream(userID, saveData).then(response => {
        this.setState({redirectTo: "/streams"})
        console.log("REDIRECT: ", this.state.redirectTo)
      })
    }
    
    handleInputChangeFilter = event => {
      let filteredStreams = this.state.streams.filter(
        (element) => {
          return element.streamName.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
        }
      )
      this.setState({ displayedStreams: filteredStreams });
    };

    saveStream = userData => {
      API.saveStream(userData).then(response => {
        this.searchStreams()
      }).catch(
          error => console.log(error)
      )
    }
  
    render() {
      if (this.state.redirectTo) {
        return <Redirect to={this.state.redirectTo}/>
      } 
        return (
          <div className="container">
            <SearchForm 
              handleInputChangeFilter={this.handleInputChangeFilter}
              streams={this.state.streams} 
            />
            <AddStream saveStream={this.saveStream}/>
            
            {/* <StreamCard>
              {this.state.displayedStreams.map((element, index) => (
                <StreamCardItem key={index} 
                id={element._id} 
                name={element.streamName}
                description={element.streamDescription} 
                date={element.dateCreated} 
                userID={this.props.userID} 
                saveFunction={this.addUserToStream}/>
            ))}
            </StreamCard> */}
            <CardDeck style={{marginTop: "20px"}}>
              {this.state.displayedStreams.map((element, index) => (
              <Card key={index} style={{ minWidth: "20rem", maxWidth: "20rem", height: "14rem", display: "inline-block", margin: "10px" }}>
                <Card.Header style={{backgroundColor: "coral", color: "black"}}>{element.streamName}</Card.Header>
                <Card.Body style={{height: "80%"}}>
                  {/* <Card.Title>{element.streamName}</Card.Title> */}
                  <Card.Text>
                    {element.streamDescription}
                  </Card.Text>
                  <Button variant="outline-dark" style={{verticalAlign: "bottom"}} data-streamid={element._id} data-userid={this.props.userID} onClick={this.addUserToStream}>Subscribe</Button>
                </Card.Body>
              </Card>
              ))}
            </CardDeck>
          </div>
        )
    }
}
 
export default Search;