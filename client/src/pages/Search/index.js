import React, {Component} from 'react'
//import {Redirect} from "react-router-dom"
import API from "../../utils/API";
import { StreamCard, StreamCardItem } from "../../components/StreamCard"
 
class Search extends Component {
    state = {
        streams: []
    }
 
    searchStreams() {
        API.searchStreams()
        .then(response => {
            this.setState({streams: response.data})
            console.log("State: ", this.state.streams)
            console.log("Response: ", response.data)
        })      
        .catch(err => console.log(err));
    }
 
    componentDidMount() {
      this.searchStreams()
    }
 
    addUserToStream = event => {
      event.preventDefault()
      console.log("ID: ", this.state.streams._id)
      API.addUserToStream({
        userID: this.props.userID,
        streamId: this.state.id
      })
    }
 
    render() {
        return (
        <StreamCard>
          {this.state.streams.map(element => (
            <StreamCardItem key={element._id} id={element._id} name={element.streamName} date={element.dateCreated}/>
        ))}
        </StreamCard>
        )
    }
}
 
 
export default Search;
