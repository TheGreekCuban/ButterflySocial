import axios from "axios";

export default {
  // Gets all examples
  getStreams: function() {
    return axios.get("/api/streams");
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
  }
  */