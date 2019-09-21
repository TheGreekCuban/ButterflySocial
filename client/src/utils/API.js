import axios from "axios";

export default {
  // Gets all examples
  getStreams: function() {
    return axios.get("/api/streams");
  },
  searchStreams: function() {
    return axios.get("/api/search");
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
  // Saves a book to the database
  saveExample: function(exampleData) {
    return axios.post("/api/examples", exampleData);
  },
  // Saves users to the database 
  saveUser: function(userData) {
    return axios.post("/api/user/signup", userData);
  }
}
*/