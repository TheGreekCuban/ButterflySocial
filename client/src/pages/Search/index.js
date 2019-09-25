import React, {Component} from 'react'
//import {Redirect} from "react-router-dom"
//import SearchBar from '@opuscapita/react-searchbar';
import API from "../../utils/API";
import { StreamCard, StreamCardItem } from "../../components/StreamCard"
import SearchForm from "../../components/SearchForm"
import addStream from "../../components/addStream"

class Search extends Component {
    state = {
        streams: [],
        userID: "",
        search: "",
        error: ""
    }
 
    searchStreams() {
        API.searchStreams()
        .then(response => {
            this.setState({streams: response.data, search: "", error: ""})
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
      this.setState({ search: event.target.value });
    };
  
    handleFormSubmit = event => {
      event.preventDefault();
      API.filterStreams(this.state.search)
        .then(res => {
          console.log(`Response.data: ${res.data}`)
          if (res.data.status === "error") {
            throw new Error(res.data.message);
          }
          this.setState({ streams: res.data, error: "" });
        })
        .catch(err => this.setState({ error: err.message }));
    };
 
    render() {
      console.log("State From Search Page: ", this.state)
        let filteredStreams = this.state.streams.filter(
          (element) => {
            return element.streamName.toLowerCase().indexOf(this.state.search.toLowerCase() !== -1)
          }
        )
        console.log(`Filtered Streams: ${filteredStreams}`)
        return (
          <div className="container">
            <StreamCard>
              {filteredStreams.map(element => (
                <StreamCardItem 
                  id={element._id} 
                  name={element.streamName} 
                  date={element.dateCreated} 
                  userID={this.props.userID} 
                  saveFunction={this.addUserToStream}/>
            ))}
            </StreamCard>
            <SearchForm>
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
              streams={this.state.streams} 
            </SearchForm>
            <addStream/>
          </div>
        )
    }
}
 
 
export default Search;
