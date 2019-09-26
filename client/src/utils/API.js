import axios from "axios";

export default {
  // Gets all examples
  getStreams: function() {
    return axios.get("/api/streams");
  },
  searchStreams: function() {
    return axios.get("/api/search");
  },
  filterStreams: function(userData) {
    return axios.get("/api/filter")
  },
  // Saves users to the database 
  saveUser: function(userData) {
    return axios.post("/api/user/signup", userData);
  },
  logUserIn: function(userData) {
    return axios.post("/api/user/login", userData);
  },
  addUserToStream: function(userID, streamID) {
    return axios.put("/api/user/" + userID, streamID)
  },
  saveStream: function(userData) {
    return axios.post("/api/search/save", userData);
  } 
};


/*
,
  // Gets the book with the given id
  getExample: function(id) {
    return axios.get("/api/examples/" + id);
  },
  // Deletes the book with the given id
  deleteExample: function(id) {
    return axios.delete("/api/examples/" + id);
  },
  // Saves users to the database 
  saveUser: function(userData) {
    return axios.post("/api/user/signup", userData);
  }
}
*/