import axios from "axios";

export default {
  // Gets all examples
  getExamples: function() {
    return axios.get("/api/examples");
  },
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
  saveUser: function(userData) {
    return axios.post("/api/user", userData);
  }
};
