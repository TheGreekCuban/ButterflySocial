import React, {Component} from 'react'
//import {Redirect} from "react-router-dom"
import API from "../../utils/API";
import { StreamCard, StreamCardItem } from "../../components/StreamCard"
import SearchForm from "../../components/SearchForm"
import AddStream from "../../components/addStream"

class Search extends Component {
    state = {
        streams: [],
        displayedStreams: [],
        userID: "",
        search: "",
        error: ""
    }
 
    searchStreams() {
        API.searchStreams()
        .then(response => {
            this.setState({streams: response.data, search: "", error: "", displayedStreams: response.data})
            //console.log("State: ", this.state.streams)
            //console.log("Response: ", response.data)
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
      //console.log(this.props);
    }
 
    addUserToStream = event => {
      event.preventDefault()
      const userID = event.target.getAttribute("data-userid")
      const saveData = {
        streamID : event.target.getAttribute("data-streamid")
      }
      API.addUserToStream(userID, saveData)
    }

    handleInputChange = event => {
      console.log("SEARCH EVENT: ", event.target.value)
      let filteredStreams = this.state.streams.filter(
        (element) => {
          return element.streamName.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
        }
      )
      console.log("FILTERED STREAMS: ", filteredStreams)
      this.setState({ displayedStreams: filteredStreams });
    };

    render() {
      console.log("State From Search Page: ", this.state)
        return (
          <div className="container">
            <StreamCard>
              {this.state.streams.map((element, index) => (
                <StreamCardItem key={index} 
                id={element._id} 
                name={element.streamName} 
                date={element.dateCreated} 
                userID={this.props.userID} 
                saveFunction={this.addUserToStream}/>
            ))}

            </StreamCard>
            <SearchForm 
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
              streams={this.state.streams} 
            />
            <AddStream/>
          </div>
        )
    }
}
 
 
export default Search;
