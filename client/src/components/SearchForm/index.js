import React from "react";
//import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.streamss array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="streams">Stream Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="streams"
          type="text"
          className="form-control"
          placeholder="Type in a stream name!"
          id="streams"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;