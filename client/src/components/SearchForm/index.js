import React from "react";
//import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.streamss array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="streams"></label>
        <input
          value={props.search}
          onChange={props.handleInputChangeFilter}
          name="streams"
          type="text"
          className="form-control"
          placeholder="Can't Find What You're Looking For? Type in a stream name!"
          id="streams"
        />
      </div>
    </form>
  );
}

export default SearchForm;