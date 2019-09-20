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
            console.log("State: ", this.state.streams[0]._id)
        })      
        .catch(err => console.log(err));
    }
 
    componentDidMount() {
      this.searchStreams()
    }
 
    // addUserToStream = event => {
    //   event.preventDefault()
    //   console.log("ID: ", this.state.streams._id)
      // API.addUserToStream({
      //   userID: this.props.userID,
      //   streamId: this.state.
      // })
    //}
 
    render() {
        return (
        <StreamCard>
          {this.state.streams.map(element => (
            <StreamCardItem id={element._id} name={element.streamName} date={element.dateCreated}/>
        ))}
        </StreamCard>
        )
    }
}
 
 
export default Search;
