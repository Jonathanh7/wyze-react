import React, { Component } from "react";
import axios from "axios";

export default class Search extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      result: [],
      search: ""
    };
  }

  handleChange(event) {
    this.setState({
      search: event.target.value
    });
  }

  async handleSubmit(_event) {
    const response = await axios.get(
      `https://api.adviceslip.com/advice/search/${this.state.search}`
    );
    this.setState({
      result: response.data.slips
    });
  }

  
  render() {
    const { result } = this.state
    const advices = this.state.result ? result.map((advice) => {
      return(
        <div className="quota" key={advice.slip_id}>
          <h1>{advice.advice}</h1>
        </div> 
      ) 
    }) :
      <div className="None" >
        <img src= "https://i.imgur.com/2TZQiT7.jpg"/>
        </div>
    
    console.log(result)
    return (
      <div id="searchResults">
        <h1>Search Results</h1>
        <input
          type="text"
          id="returned"
          placeholder="Search for ..."
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input type="button" onClick={this.handleSubmit} />
       
        {advices}
      </div>
    );
  }
}
