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
        error: "",

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
      API.addUserToStream(userID, saveData)
    }
    
    handleInputChangeFilter = event => {
      let filteredStreams = this.state.streams.filter(
        (element) => {
          return element.streamName.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
        }
      )
      this.setState({ displayedStreams: filteredStreams });
    };
  
    render() {
        return (
          <div className="container">
            <StreamCard>
              {this.state.displayedStreams.map((element, index) => (
                <StreamCardItem key={index} 
                id={element._id} 
                name={element.streamName} 
                date={element.dateCreated} 
                userID={this.props.userID} 
                saveFunction={this.addUserToStream}/>
            ))}
            </StreamCard>
            <SearchForm 
              handleInputChangeFilter={this.handleInputChangeFilter}
              streams={this.state.streams} 
            />
            <AddStream/>
          </div>
        )
    }
}
 
export default Search;