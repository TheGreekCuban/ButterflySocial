import React, {Component} from 'react'
//import {Redirect} from "react-router-dom"
import API from "../../utils/API";
import { StreamCard, StreamCardItem } from "../../components/StreamCard"
 
class Search extends Component {
    state = {
        streams: [],
        userID: ""
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

    componentDidUpdate() {
      if ( this.state.userID !== this.props.userID ){
        this.setState({
          userID: this.props.userID
        })
        this.searchStreams()
      }
      console.log(this.props);
    }
 
    addUserToStream = event => {
      event.preventDefault()
      const userID = event.target.getAttribute("data-userid")
      const saveData = {
        streamID : event.target.getAttribute("data-streamid")
      }
      API.addUserToStream(userID, saveData)
    }
 
    render() {
      console.log(this.props)
        return (
          <div className="container">
            <StreamCard>
              {this.state.streams.map((element, index) => (
                <StreamCardItem key={index} id={element._id} name={element.streamName} date={element.dateCreated} userID={this.props.userID} saveFunction={this.addUserToStream}/>
            ))}
            </StreamCard>
        </div>
        )
    }
}
 
 
export default Search;
