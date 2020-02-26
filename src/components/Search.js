import React, { Component } from "react";
import axios from "axios";

export default class Search extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      result: {},
      search: ""
    };
  }

  handleChange(event) {
    this.setState({
      search: event.target.value
    });
  }

  async handleSubmit(event) {
    const response = await axios.get(
      `https://api.adviceslip.com/advice/search/${this.state.search}`
    );
    this.setState({
      result: response
    });
  }

  render() {
    return (
      <div>
        <h1>Search Results</h1>
        <input
          type="text"
          id="returned"
          placeholder="Search for ..."
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input type="button" onClick={this.handleSubmit} />
      </div>
    );
  }
}
